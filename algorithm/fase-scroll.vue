

<template>
<div class="root" 
  @mousedown="handleMousedown" 
  @mouseup="handleMouseup"
  @mousemove="handleMousemove">
  <div class="show_wrap">
      <div class="show">
    DOWN: {{m_down_x}}, {{m_down_y}}
  </div>
    <div class="show">

    {{transformStyle}} durationTime: {{durationTime}}
  </div>
  </div>
  <div class="inner" ref="inner">
    
    <div class="inner_body" ref="body" :style="{transform: transformStyle, transitionDuration: durationTime}">
      <div class="item" v-for="v in 399" :key="v">{{v}}</div>
    </div>
  </div>
  </div>
</template>
<script>

const MAX_MOMENTUM_TIME = 50;
const MAX_MOMENTUM_DURATION = '1s';
export default {

  data(){
    return {
      is_m_down: false,
      is_ami: false,
      m_down_x: 0,
      m_down_y: 0,
      m_move_x: 0,
      m_move_y: 0,
      p_old_x: 0,
      p_old_y: 0,
      p_curr_x: 0,
      p_curr_y: 0,
      pre_time: 0
    }
  },
  computed: {
    transformStyle(){
      return `translate(${this.p_curr_x}px, ${this.p_curr_y}px)`;
    },
    durationTime(){
      if(!this.is_ami){
        return '0s';
      }
      return MAX_MOMENTUM_DURATION;
    }
  },
  methods: {
    handleMousedown(e){
      this.is_m_down = true;
      this.m_down_x = e.clientX;
      this.m_down_y = e.clientY;
      this.pre_time = e.timeStamp;

      if(this.is_ami){
        this.is_ami = false;
        this.p_old_x = this.p_curr_x;
        this.p_old_y = this.p_curr_y;
        let tra = getComputedStyle(this.$refs.body)['transform'];
        tra = tra.substring(19, tra.length - 1);
        tra = tra.split(', ');
        this.p_curr_x = Number(tra[0]);
        this.p_curr_y = Number(tra[1]);
        // console.log('tra', tra)
        //       console.log('getComputedStyle', getComputedStyle(this.$refs.body)['transform']);
      }

        this.p_old_x = this.p_curr_x;
        this.p_old_y = this.p_curr_y;
      // this.getCurrXY(e);
    },

    handleMouseup(e){
      this.is_m_down = false;
      this.getCurrXY(e);
      this.p_old_x = this.p_curr_x;
      this.p_old_y = this.p_curr_y;
      const x_dist = e.clientX - this.m_down_x;
      const y_dist = e.clientY - this.m_down_y;
      const time_cost = e.timeStamp - this.pre_time;
      if(time_cost < MAX_MOMENTUM_TIME){
        this.is_ami = true;
        let p = Math.ceil(MAX_MOMENTUM_TIME / time_cost);
        if(p > 3){
          p = 3;
        }
        let is_x = x_dist !== 0;
        let is_y = y_dist !== 0;
        if(is_x || is_y){
          this.is_ami = true;
        }
        if(is_x){
          this.p_curr_x = this.p_old_x + x_dist * p;
        }
        if(is_y){
          this.p_curr_y = this.p_old_y + y_dist * p;
        }
      }

    },
    handleMousemove(e){
      if(!this.is_m_down){
        return;
      }
      this.pre_time = e.timeStamp;
      this.getCurrXY(e);
    },
    getCurrXY(e){
      this.p_curr_x = _getCurr(this.p_old_x, this.m_down_x, e.clientX);
      this.p_curr_y = _getCurr(this.p_old_y, this.m_down_y, e.clientY);
    }
  }
}
function _getCurr(m_down_x, start, moved){
  return m_down_x + (moved - start);
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  user-select: none;
}
.root {
  height: 100%;
  background-color: #2c3e50;
  position: relative;
}
.show_wrap {
  position: absolute;
  height: 100px;
  z-index: 200;
}
.show {
  color: #fff;
}
.inner {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #333;
  overflow: hidden;
}
.inner_body {
  display: flex;
  flex-wrap: wrap;
  width: 300%;
  transition-property: transform;
  transition-timing-function: ease-out;
  cursor: pointer;
}
@keyframes mymove {

}
.item {
  width: 200px;
  height: 200px;
  color: #fff;
  font-size: 50px;
  border: 1px solid #eee;
  line-height: 200px;
  background-color: burlywood;
}
</style>
