

function AfterExec(interval, callback, isLoop){
  this.interval = interval;
  this.lastActiveTime = 0;
  this.startTime = this.lastActiveTime;
  this.task = callback;
  this.isLoop = isLoop;
  this._timer = null;
  this.trigger = this._start;
}

AfterExec.prototype._start = function(timeStamp){
  this.startTime = this.lastActiveTime = timeStamp;
  this.trigger = this._trigger;
  console.log('_start');
  this.process();
}

AfterExec.prototype._trigger = function(timeStamp){
  this.lastActiveTime = timeStamp;
}

AfterExec.prototype.process = function(){

  let interval = this.interval;
  if(this.startTime < this.lastActiveTime){
    this.startTime = performance.now();
    interval = interval - Math.floor(this.startTime - this.lastActiveTime);
    console.log('interval_1', interval)
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
      if(this.isLoop){
        this.trigger = this._start;
      } else {
        this._timer = null;
      }
      
    }
  }, interval);

}
AfterExec.prototype.destory = function(){
  if(this._timer){
    clearTimeout(this._timer);
  }
}

