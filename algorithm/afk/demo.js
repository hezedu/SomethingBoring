
console.log('start');

let t2;
let t3 = performance.now();
const ae = new AfterExec(2000, () => {
  let t4 = performance.now();
  
  console.log('T2--------', Date.now() - t2, '---------', t4 - t3);
  t3 = t4;
}, true)

let count = 0;
console.time('ae2');

let t = setInterval(() => {
  if(count === 2){
    clearInterval(t);
    t2 = Date.now();
    console.timeEnd('ae2');
  }
  count = count  + 1;
  ae.trigger(performance.now());
  
  
}, 1000)