const ONE_DAY_TIME = 1000 * 60 * 60 * 24;
const WEEK = ['日', '一', '二', '三', '四', '五', '六']

let daySplitter, currWeek, weekSplitter, yearSplitter;


function init(){
  let date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  daySplitter = date.getTime();
  
  currWeek = date.getDay();
  
  weekSplitter = daySplitter - ((currWeek - 1) * ONE_DAY_TIME);
  
  date.setDate(1);
  date.setMonth(0);
  
  yearSplitter = date.getTime();
}

function reInitAndGetNeedUpdateSplitter(){
  let bak = {
    daySplitter,
    weekSplitter,
    yearSplitter
  }
  init();
  if(bak.yearSplitter !== yearSplitter){
    return yearSplitter;
  }
  if(bak.weekSplitter !== weekSplitter){
    return weekSplitter;
  }
  return daySplitter;
}

let triggerEvent;

function loopInit(){
  let time = (daySplitter +  ONE_DAY_TIME) - Date.now();
  setTimeout(() => {
    let needUpdateSplitter = reInitAndGetNeedUpdateSplitter();
    triggerEvent(needUpdateSplitter);
    loopInit();
  }, time)
}

let isStart;
export function start(_triggerEvent){
  if(isStart){
    throw new Error('time rules already start');
  }
  isStart = true;
  triggerEvent = _triggerEvent;
  init();
  loopInit();
}

export function dateFormat(dateStr){
  let date2 = new Date(dateStr);
  let time = date2.getTime();
  if(time < daySplitter){ // 不是今天
    let day = date2.getDate();
    day = addPrevZero(day);
    if(time > weekSplitter){
      let week2 = date2.getDay();
      let prevDay = currWeek - week2;
      let dayStr;
      switch(prevDay){
        case 1:
        dayStr = '昨天';
        break;
        case 2:
        dayStr = '前天';
        break;
        default: 
        dayStr = '星期' + WEEK[week2];
      }
      return dayStr +  ' ' + getHours(date2);

    }else{
      let month = date2.getMonth() + 1; 
      month = addPrevZero(month);
      if(time < yearSplitter){
        let year = date2.getFullYear();
        return `${year}-${month}-${day}`;
      }else{
        return `${month}-${day}`;
      }
    }

  }else{
    return getHours(date2);
  }
}

function getHours(date2){
  let hours = date2.getHours();
  hours = addPrevZero(hours);
  let minutes = date2.getMinutes();
  minutes = addPrevZero(minutes);
  return `${hours} : ${minutes}`
}

function addPrevZero(num){
  if(num < 10){
    return '0' + num.toString()
  }
  return num.toString();
}


// function test(arg){
//   console.log(arg,  ' -> ', dateFormat(arg));
// }

// console.log('*****************************');

// let testArr = ['2017-08-24', '2018-08-24', '2018-09-12',
// Date.now(), 
// Date.now() - ONE_DAY_TIME, 
// Date.now() - ONE_DAY_TIME * 2,
// Date.now() - ONE_DAY_TIME * 3,
// Date.now() - ONE_DAY_TIME * 4,
// Date.now() - ONE_DAY_TIME * 5,
// Date.now() - ONE_DAY_TIME * 30,
// Date.now() - ONE_DAY_TIME * 366
// ]
// testArr.forEach((time) => {
//   test(time);
// })
// console.log('*******setTimeout************');
// setTimeout(() => {
//   console.error('************** 30 秒后 **************');
//   testArr.forEach((time) => {
//     test(time);
//   })
// }, 30 * 1000);
