function SimpleEvent(){
  this.listenerMap = new Map;
  this.listeners = [];
}
SimpleEvent.prototype.on = function(key, callback){
  const map = this.listenerMap;
  let listeners = map.get(key);
  if(!listeners){
    listeners = [];
    map.set(key, listeners);
  }
  listeners.push(callback);
}
SimpleEvent.prototype.off = function(key, callback){
  const listeners = map.get(key);
  if(listeners){
    const i = listeners.findIndex(handler => handler === callback);
    if(i !== -1){
      listeners.splice(i, 1);
    }
  }
}

SimpleEvent.prototype.emit = function(key, e){
  const listeners = map.get(key);
  if(listeners){
    listeners.forEach(handler => {
      handler(e);
    });
  }
}


export default SimpleEvent;
