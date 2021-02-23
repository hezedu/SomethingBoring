function MinIntervalQueue(minInterval){
  this.queue = [];
  this.minInterval = minInterval || 0;
  this.isProcess = false;
  this.taskStartTime = 0;
  this.currTask = null;
}

MinIntervalQueue.prototype.push = function(args){
  this.queue.push(args);
  if(this.isProcess){
    return;
  }
  this.isProcess = true;
  this._loop();
}
MinIntervalQueue.prototype._loop = function(){
  const now = Date.now();
  const _start = this.minInterval + this.taskStartTime;
  let interval = 0;
  if( _start > now ){
    interval = _start - now;
  }
  // console.log('*******************', interval, '*******************')

  if(interval > 0){
    setTimeout(() => {
      this._run();
    }, interval);
  } else {
    this._run();
  }
}

MinIntervalQueue.prototype._run = function(){
  const task = this.queue.shift();
  this.taskStartTime = Date.now();
  task(() => {
    
    if(this.queue.length){
      this._loop();
    } else {
      this.isProcess = false;
    }

    
  });
}

module.exports = MinIntervalQueue;
