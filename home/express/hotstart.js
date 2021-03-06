/*
hezedu 
2015-5-20
北京
*/
var fs = require('fs');
var crypto = require('crypto');
var sas = require('sas');
var path = require('path');


var hotstart = function hotstart(app, conf) {
  var dir = conf.dir; //目录 必须.
  var dir2 = (dir[dir.length - 1] === '/') ? dir.substr(0, dir.length - 1) : dir; //trim掉后面的/;
  var ignore = conf.ignore || [dir2 + '/public', dir2 + '/node_modules']; //忽略掉的文件夹
  var v_cache = {};
  switch (conf.tpl) {
    case 'jade':
      v_cache = require('jade').cache;
      break;
    case 'ejs':
      v_cache = require('ejs').cache._data;
      break;
    default:
      console.error("\u001b[91m hotStart is Temporary support tpl:" + conf.tpl + "\u001b[39m");
  }
  var appSet = app.settings;
  var def_suffix = [".js"];
  if (!appSet['view cache']) {
    ignore.push(appSet['views']);
  } else {
    def_suffix.push('.' + appSet['view engine']);
  }

  var ignore_len = ignore.length;
  var route = conf.route || '/hotstart';
  var watch = conf.watch || true;


  conf.suffix = conf.suffix || def_suffix;


  var hashObj = {}; //文件hash缓存
  var difObj = {}; //改变的文件 
  var r_cache = require.cache;
  console.log(require('ejs').cache)
  var handle = conf.handle || "/app.js";
  handle = dir2 + handle;
  if (process.platform.indexOf('win') !== -1) {
    handle = handle.replace('/', '\\');
  }

  //sas tasks start
  function _hash(path, cb) {
    fs.readFile(path, 'utf8', function(err, data) {
      if (err) {
        return cb(err);
      }
      return cb(null, crypto.createHash('sha1').update(data).digest('hex'));
    });
  }

  function _stat(path) {
    return function(cb) {
      for (var i = 0; i < ignore_len; i++) {
        if (path == ignore[i]) {
          return cb(); //忽略的文件夹。
        }
      }
      fs.lstat(path, function(err, stat) {
        if (err) { //一些奇怪的文件
          return cb();
        }
        if (stat.isSymbolicLink()) { //linux 软链接
          return cb();
        }

        if (stat.isDirectory()) {
          return cb('$RELOAD', [read_dir]);
        } else {
          var _suffix = path.substr(path.lastIndexOf('.'));
          if (conf.suffix.indexOf(path.substr(path.lastIndexOf('.'))) === -1) {
            return cb();
          }
          _hash(path, function(err, data) {
            if (err) {
              return cb();
            }
            if (!hashObj[path]) {
              hashObj[path] = data;
            } else if (hashObj[path] !== data) {
              difObj[path] = data;
            }
            cb();
          });
        }
      });
    }
  }

  function read_dir(cb, t) {
      var t_fspath = t.fspath();
      var fspath = dir2 + t_fspath.join('') || dir2 || dir; //t.fspath()=返回过滤掉t.path里数字的一个新数组。
      fs.readdir(fspath, function(err, files) {
        if (err) { //一些奇怪的文件夹 
          //console.log('read_dir Err= ' + err);
          return cb();
        }
        var obj = {};
        var len = files.length;
        if (!len) {
          return cb(); //空文件夹
        }
        for (var i = 0; i < len; i++) {
          var file = files[i];
          obj['/' + file] = fspath + '/' + file; //防止跟保留字冲突，前面加 '/';
        }
        t.push(obj);
        cb();
      });
    }
    //sas tasks end  


  function _hot_up(req, isServer) {
    var isEmpty = true;
    for (var i in difObj) {
      var p_i = path.normalize(i);
      if (r_cache[p_i]) {
        isEmpty = false;
        if (p_i !== handle) {
          r_cache[p_i].loaded = false;
          r_cache[p_i].load(p_i);
        }
        console.log("\u001b[92m" + p_i + "  is hot started\u001b[39m");
      } else if (v_cache[p_i]) {
        v_cache[p_i] = null;
        delete(v_cache[p_i]);
        console.log("\u001b[94m" + p_i + "  is hot started\u001b[39m");
      }
      hashObj[i] = difObj[i];
      difObj[i] = null;
      delete(difObj[i]);
    }
    if (!isEmpty) {
      r_cache[handle].loaded = false;
      r_cache[handle].load(handle);
      if (isServer) {
        server._events.request = r_cache[handle].exports;
      } else {
        req.socket.server._events.request = r_cache[handle].exports;
      }
    }
  }
  var htmlTop = [
    '<html>',
    '<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.1.min.js"></script>',
    '<body><h1 style="border-bottom:1px solid #666"> diff list <input type="submit" style="color:red" onclick="hotStart(this)" value="Hot Start"/></h1>'
  ];
  htmlTop = htmlTop.join('');

  var htmlBottm = '<script>var list=$("#list");function hotStart(th){$.post("",{},function(){list.empty()})}</script></body></html>';

  function _hotstart_list() {
    var tpl = [];
    for (var i in difObj) {
      var p_i = path.normalize(i);
      tpl.push(p_i);
    }
    return htmlTop + '<div id="list"><div>' + tpl.join('</div><div>') + '</div></div>' + htmlBottm;
  }

  console.log('\u001b[90mhotStart init...\u001b[39m');

  var diffList = function(cb) {
    sas([read_dir], {
      iterator: _stat,
      allEnd: function() {
        cb(difObj, hashObj);
      }
    });
  }
  diffList(function() {
    console.log('\u001b[90mhotStart inited\u001b[39m');
  });
  //外部API
  hotstart.diffList = diffList;
  hotstart.up = _hot_up;

  //所有有变化的列表
  return function(req, res, next) {
    if (req.path === route) {
      var method = req.method.toLowerCase();
      if (method === 'get') {
        diffList(function() {
          res.send(_hotstart_list());
        });

      } else if (method === 'post') {
        res.end('');
        _hot_up(req);
      }
    } else {
      next();
    }
  }
}

module.exports = hotstart;