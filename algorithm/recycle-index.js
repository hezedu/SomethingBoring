function RecycleIndex(){
  this.index = 0;
  this.pool = [];
}
RecycleIndex.prototype.get = function(){
  if(this.pool.length){
    return this.pool.pop();
  }
  this.index = this.index + 1;
  return this.index;
}
RecycleIndex.prototype.recycle = function(index){
  this.pool.push(index);
  if(this.pool.length === this.index){
    // console.log('pool clear', this.index);
    this.pool = [];
    this.index = 0;
  }
}