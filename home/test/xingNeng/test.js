/*
new vs 合闭包
*/
var len = 10000000;
function _new(){
  this.test = 0;
}
_new.prototype.min = function(){
  this.test+=1;
}

function _bb(){
  var test = 0;
  function _min(){
    test+=1;
  }
}

var time = Date.now();
for(var i=0;i<len;i++){
  new _new().min();
  //_bb()
}
console.log(Date.now() - time)