var http = require('http');
http.Server.prototype.hotstart = function(){
  console.log(this._events.request);
};