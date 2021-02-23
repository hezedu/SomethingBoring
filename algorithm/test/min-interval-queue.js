const MinIntervalQueue = require('../min-interval-queue');

const minIntervalQueue = new MinIntervalQueue(1000);
console.log('start');
let startTime = Date.now();
let preTime = startTime;
const len = 10;
for(let i = 0; i < len; i++){
  minIntervalQueue.push(function(callback) {
    setTimeout(() => {
      const _now = Date.now()
      const cost = _now - preTime;
      
      console.log('Fast Task ',  i, 'cost', cost, '总用时', _now - startTime);
      preTime = _now;
      callback();
    }, 700);
  })
}

for(let i = 0; i < len; i++){
  minIntervalQueue.push(function(callback) {
    setTimeout(() => {
      const _now = Date.now()
      const cost = _now - preTime;
      
      console.log('slow Task ',  i, 'cost', cost, '总用时', _now - startTime);
      preTime = _now;
      callback();
    }, 1700);
  })
}


