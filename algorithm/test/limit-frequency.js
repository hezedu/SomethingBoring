const LimitFrequency = require('../limit-frequency');
// const LFOld = require('../limit-frequency-bak');
let time = Date.now();
const lf = new LimitFrequency(function(){
  let now = Date.now();
  console.log('go', now - time );
  time = now;
}, 500);

// 第一次立马显示
// lf.trigger();
// console.log('go下面显示');
let count = 0;
let timer = setInterval(function(){
  lf.trigger();
  // console.log('count', count);
  if(count === 30){
    clearInterval(timer);
    lf.end();
  } else {
    if(count === 0){
      lf.go();
    }
  }
  count = count + 1;
  
}, 100);