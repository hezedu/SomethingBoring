var fs = require('fs');
var path = require('path');

var jade = require('jade');
var uglify = require("uglify-js");
var etag = require('etag');


function jadeout_server(tpl_path, opts) {
  if (!tpl_path) {
    /*    tpl_path = __dirname.indexOf('node_modules');
        tpl_path = tpl_path > 0 ? __dirname.substr(0, tpl_path - 1) : __dirname;*/
    tpl_path = path.join(process.cwd(), 'jadeout');
  }

  opts = opts || {};

  var maxAge = typeof opts.maxAge === 'undefined' ? 1000 * 60 * 60 * 24 * 365 : opts.maxAge;
  var watch = typeof opts.watch === 'undefined' ? true : opts.watch;




/*  if (!process.env.NODE_ENV === 'production') {
    //开发环境
    return function(req, res, next) {
      next();
    }
  } else {*/
    //线上环境
    return function(req, res, next) {

      var real_path = path.join(tpl_path, req.path);
      var cache_key = real_path + ':client';
      var _etag = ''
      if (!jade.cache[cache_key]) {
        //如果没有缓存的话.
        jadeout_server.create_cache(real_path, cache_key);
        _etag = etag(jade.cache[cache_key]);
        jadeout_server.index[cache_key] = _etag;
        fs.watch(real_path, function() {
          jade.cache[cache_key] = null;
        });
      } else {
        _etag = etag(jade.cache[cache_key]);
      }

      res.setHeader('Content-Type', 'application/javascript');
      res.setHeader('Cache-Control', "max-age=" + maxAge);
      res.setHeader('Etag', _etag);
      res.send('jade_out.cache["' + req.path + '"]=' + jade.cache[cache_key]);
    }
  //}
}


jadeout_server.index = {};

jadeout_server.create_cache = function create_cache(real_path, cache_key) {
  var jsFunctionString = jade.compileFileClient(real_path);
  jade.cache[cache_key] = uglify.minify(jsFunctionString, {
    fromString: true
  });
}

module.exports = jadeout_server;