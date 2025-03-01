function AfterExec(interval, callback){
  this.interval = interval;
  this.lastActiveTime = 0;
  this.startTime = this.lastActiveTime;
  this.task = callback;
  this._timer = null;
  this.process();
}


AfterExec.prototype.trigger = function(timeStamp){
  this.lastActiveTime = timeStamp;
}

AfterExec.prototype.process = function(){

  let interval = this.interval;
  if(this.startTime < this.lastActiveTime){
    this.startTime = performance.now();
    interval = interval - Math.floor(this.startTime - this.lastActiveTime);
  } else {
    interval = this.interval;
  }
  if(interval <= 0){
    console.log('interval <= 0', interval);
    interval = 0;
  }
  this._timer = setTimeout(() => {
    if(this.startTime < this.lastActiveTime){
      this.process();
    } else {
      this.task();
    }
  }, interval);

}
AfterExec.prototype.destory = function(){
  if(this._timer){
    clearTimeout(this._timer);
  }
}