
var http = require('http');
http.Server.prototype.dw_reload = function(requestListener){
  this.addListener('request', requestListener);
}
var server = http.createServer();
/*process.on('uncaughtException',function(e){
  console.log('Unhandleds');
  console.log(e);
  e=null;
});*/
//server.listen(1337, '127.0.0.1');

var zupu = require('zupu.js')
var test = 1


var test2 = function(req,res){
  res.end('Hello World');
  dis();
}

var test3 = function(req,res){
  res.end('Hello World2test3test3test3');
  dis();
}


var dis = function(){
  if(Date.now()%2 ===1){
    server._events.request =test2;
  }else{
    server._events.request =test3;
  }
}
dis();
server.on('request',function(req,res){
  
});

/*server.on('request', function(req,res){


 if(test===1){
    return server._events.request =test3;
    test = 2;
  }else{
    
    return server._events.request =test2;
    test= 1;
  }

  res.writeHead(200, {'Content-Type': 'text/html'});
  zupu.init(res);//初始代，只需一次
  res.write(zupu(server));

  
  res.end('\n');

});*/
require('./listen')(server);
console.log('Server running at http://127.0.0.1:1337/');