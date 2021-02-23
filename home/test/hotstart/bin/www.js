//var hotstart = require('../hotstart');
var http = require('http');
var app = require('../app');
var path = require('path');
var server=http.createServer(app);
server.listen(1337, '127.0.0.1');

/*hotstart({
  dir: path.dirname(__dirname),  //must
  handle: '/app.js',  // app.js
  ignore:['/public','/node_modules'], //ignore dir . if view cache is false, then will push view path
  suffix:['.js'],  //suffix Filter. if view cache is true, then will push view engine
  route: '/hotstart', //a simple web route
  tpl: 'jade',  //tpl engine cache clear. EJS jade only supports
},server);*/

console.log('Server running at http://127.0.0.1:1337/');