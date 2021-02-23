function PureEvent(){
  this.listeners = [];
  this.isGenEmiter = false;
}
PureEvent.prototype.bind = function(cb){
  this.listeners.push(cb);
}
PureEvent.prototype.unBind = function(cb){
  const i = this.listeners.findIndex(cb2 =>  cb2 === cb);
  if(i !== -1){
    this.listeners.splice(i ,1);
  }
}

// PureEvent.prototype.emit = function(e){
//   this.listeners.forEach(cb => {
//     cb(e);
//   })
// }

PureEvent.prototype.genOnceEmiter = function(){
  delete(this.genOnceEmiter);
  return (e) => {
    this.listeners.forEach(cb => {
      cb(e);
    })
  }
}
export default PureEvent;
