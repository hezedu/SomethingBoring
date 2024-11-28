console.log('start');
console.time('timeout');
setTimeout(() => {
  console.timeEnd('timeout');
  
}, 1000);


console.time('Interval');

const t = setInterval(() => {
  console.timeEnd('Interval')
  clearInterval(t);
  
}, 1000)