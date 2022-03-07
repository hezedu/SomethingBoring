
<template>
<div class="_insured_time_count_down_wrap">
	<div class="_insured_time_count_down_item" 
	v-for="(item, index) in accurateNow" 
	:key="index">{{item}}</div>
  <!-- <div>{{now}}</div> -->
  <!-- <div>{{accurateNow}}</div> -->
</div>
</template>

<script>
const HOUR_TIME = 1000 * 60 * 60;
export default {
	props: ['interval', 'isDay'],
  data(){
    return {
      simpleCount: 0,
      now: '',
		isHour: true,
		
      timeZoneOffsetTime: 0,
      accurateStartTime: 0,
      accurateNow: [],
    
    }
  },
  methods: {
    getData(){
      // setTimeout(() => {
      //   this.interval = 1000 * 60 * 60 * 24 * 366;

      //   this.initAccurateCountDown();

      //   this.simpleCount = this.interval / 1000;

      //   // this.startCountDown();
      //   this.startAccurateCountDown();
      // }, 200)
	  this.initAccurateCountDown();
	  this.startAccurateCountDown();
    },
    initAccurateCountDown(){
      const d = new Date();
      this.timeZoneOffsetTime = d.getTimezoneOffset() * 60 * 1000;
      this.accurateStartTime = d.getTime();
    },
    startAccurateCountDown(){
      if(this._accurateLoop() === 0){
		  this.endAccurateCountDown();
        return;
      };
      this.$options._accurate_timer = setInterval(() => {
        const r = this._accurateLoop();
        if(r === 0){
          this.endAccurateCountDown();
        }
      }, 1000);
    },
    endAccurateCountDown(){
	  this.$emit('end');
      this.clearTimer()
    },
	clearTimer(){
      if(this.$options._accurate_timer){
        clearInterval(this.$options._accurate_timer);
      }
	},
    _accurateLoop(){
      let timeInterval = this.interval - ((Date.now() - this.accurateStartTime));
      
      if(timeInterval < 0){
        timeInterval = 0;
      }
      
      const time = new Date(timeInterval);
      // this.accurateNow = (time.getUTCFullYear() - 1970) + '年' + 
      // this.padding0(time.getUTCMonth()) + '月' + 
      // this.padding0(time.getUTCDate() - 1) + '日' + 
	  let out = [];
	  if(this.isDay){
		  const day = time.getUTCDate() - 1;
		  out.push(this.padding0(time.getUTCHours() + day * 24));
	  }
	  out.push(this.padding0(time.getUTCMinutes()));
	  out.push(this.padding0(time.getUTCSeconds()));
      // this.padding0(time.getUTCHours()) + '小时' + 
      //  this.padding0(time.getUTCMinutes()) + '分' + 
      //  this.padding0(time.getUTCSeconds()) + '秒';
	  this.accurateNow = out;
	  
       return timeInterval;
    },
    startCountDown(){
      this.endCountDown();
      this.$options._timer = setInterval(() => {
        this.simpleCount = this.simpleCount - 1;
        if(this.simpleCount < 0){
          this.simpleCount = 0;
        }
        this.genNow();
        if(this.simpleCount === 0){
          this.endCountDown();
        }
      }, 1000);
    },
    genNow(){
      const ss = this.simpleCount;
      const fen = Math.floor(ss / 60) ;
      const s = ss % 60;
      this.now = this.padding0(fen) + ':' + this.padding0(s);
      // this.now = s + ':' + this.simpleCount;
    },
    padding0(num){
      if(num < 10){
        return '0' + num;
      }
      return num.toString();
    },
    endCountDown(){
      if(this.$options._timer){
        clearInterval(this.$options._timer)
      }
    }
  },
  created(){
    this.getData();
  },
  destroyed(){
	  this.clearTimer();
  }
};
</script>
<style>
._insured_time_count_down_wrap{
	display: flex;
}
._insured_time_count_down_item{
	width: 40rpx;
	height: 40rpx;
	background: #ffffff;
	border-radius: 4rpx;
	font-size: 26rpx;
	font-weight: 500;
	color: #333333;
	margin-right: 18rpx;
	position: relative;
	line-height: 1;
	/* text-align: center; */
	display: flex;
	align-items: center;
	justify-content: center;
}
._insured_time_count_down_item::after, 
._insured_time_count_down_item::before{
	width: 4rpx;
	height: 6rpx;
	background: #ffffff;
	position: absolute;
	content: '';
	display: block;
	right: -8rpx;
	
}
._insured_time_count_down_item::before{
	bottom: 6rpx;
}
._insured_time_count_down_item::after{
	top: 6rpx;
}
._insured_time_count_down_item:last-child::after,
._insured_time_count_down_item:last-child::before{
	display: none;
}
</style>