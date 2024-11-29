// console.log('start');
// console.time('timeout');
// setTimeout(() => {
//   console.timeEnd('timeout');
  
// }, 1000);


// console.time('Interval');

// const t = setInterval(() => {
//   console.timeEnd('Interval')
//   clearInterval(t);
  
// }, 1000)


const e = { timeStamp : 123};

function Abc(){
  this.time1 = 0;
  this.time2 = 0;
}

Abc.prototype.triggerByE = function(e){
  this.time1 = e.timeStamp;
}

Abc.prototype.trigger = function(timeStamp){
  this.time2 = timeStamp;
}

const max = 10000 * 1000;
let i = 0;
const abc = new Abc;

for(; i < max; i++){
  abc.triggerByE(e);
}
i = 0;
for(; i < max; i++){
  abc.trigger(e.timeStamp);
}
i = 0;
console.log('start');
// --------------------------------
console.time('trigger1');
for(; i < max; i++){
  abc.triggerByE(e);
}
console.timeEnd('trigger1');
// --------------------------------
i = 0;
console.log('start2');
// --------------------------------

console.time('trigger2');
for(; i < max; i++){
  abc.trigger(e.timeStamp);
}
console.timeEnd('trigger2');
// --------------------------------
console.log(abc);
