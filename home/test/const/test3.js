var http = require('http');
var virgin = require('./virgin');
var test = require('./test');
test(virgin);

virgin.__SET__('test',{a:'a222222'});

var obj = {

  a:{
    b:'b'
  }
}

virgin.__SET__(obj);

obj.a.b ='ss';


var test2 = require('./test2');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');



}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');