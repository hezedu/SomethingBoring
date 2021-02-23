

var a  = require('./models/a');
var hostart = require('./hotstart2.0');
//var sas = require('sas');
var zupu = require('zupu.js');



var app = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  zupu.init(res);
  
  if(req.url === '/'){
  res.write(zupu(server));

  
}else if(req.url==='/IncomingMessage'){
  res.write('<h1>IncomingMessage</h1>');
  res.write(zupu(new http.IncomingMessage()));
}else if(req.url==='/hotstart'){
  var min = process.mainModule.children[0];
  min.loaded = false;
  min.load(min.id);
  req.socket.server._events.request = min.exports;
  res.write('<h1>mainModule33</h1>');
  res.write(zupu(process.mainModule));
  res.write('<h1>require.cache</h1>');
  res.write(zupu(require.cache));
}else if(req.url==='/req'){
  res.write('<h1>req</h1>');
  res.write(zupu(req));
}else if(req.url==='/module'){
  res.write('<h1>module</h1>');
  res.write(zupu(module));

}
  res.end(req.url);
}

module.exports = app;