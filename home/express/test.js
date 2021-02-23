var fs = require('fs');
var crypto = require('crypto');
var sas = require('sas');
var path = require('path');

var HServer = require('http').Server;
HServer.prototype.dw_test = 'dw_test';

var dir = __dirname; //根目录
var dir2 = (dir[dir.length - 1] === '/') ? dir.substr(0, dir.length - 1) : dir; //trim掉后面的/;

var ignore = [dir2 + '/public', dir2 + '/node_modules']; //要忽略的文件夹
var ignore_len = ignore.length;

var hashObj = {}; //文件hash缓存
var difObj = {};



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

var r_cache = require.cache;
var v_cache = require('jade').cache;

console.log('\ntestdv\n')

function _hot_up() {

  for (var i in difObj) {
    var p_i = path.normalize(i);
    if(r_cache[p_i]){
    r_cache[p_i].loaded = false;
    r_cache[p_i].load(p_i);

        if (p_i == __dirname + "\\app.js") {
      //console.log(r_cache[p_i]);
      server._events.request = r_cache[p_i].exports;
    }
    console.log("\u001b[96m" + p_i + "\u001b[39m");
    }
    hashObj[i] = difObj[i];
    difObj[i] = null;
    delete(difObj[i]);

  }

  /*  if(p_i ==="D:\\duwei\home\express\app.js"){ dssdafdsfsdf
      
      server._events.request = r_cache[p_i];fsdasd
    }*/
}



exports.test = function() {
  return function(req, res, next) {
    sas([read_dir], { //////核心
      iterator: _stat,
      allEnd: function(err) {
        res.send('666888999');
        _hot_up();
      }
    });
  }
}