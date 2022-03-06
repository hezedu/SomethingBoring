<template>
<div class="index_tra_wrap">
  <div class="index_tra" >
    <transition name="tra" @enter="handleBeforeEnter" @before-leave="handleBeforeLeave"  @after-leave="handleAfterLeave" @leave="handleLeave">
    <div class="index_tra-item" :key="key" :style="{zIndex: key}">Page {{key}}</div>
    </transition>
  </div>
</div>
</template>
<script>
let nativeRAF = setTimeout;
function _rdm(){
  let ex, ey, ez;
  ez = Math.random() * 499;
  ex = Math.random() > 0.5 ? 100 : 0;
  ey = Math.random() > 0.5 ? 100 : 0;

  if(ex !== 100 && ey !== 100){
    if(Math.random() > 0.5){
      ex = 100;
    } else {
      ey = 100;
    }
  }

  return {ex, ey, ez}
}
if(typeof window !== undefined && window.requestAnimationFrame) {
  nativeRAF = window.requestAnimationFrame;
}
export default {
  data(){
    return {
      key: 1,
      isPush: true,
      zIndex: 1
    }
  },
  methods: {
    handleBeforeEnter(el){
      const {ex, ey, ez} = _rdm();
      let x, y;
      if(this.isPush){
        x = ex;
        y = ey;
      } else {
        x = -ex;
        y = -ey;
      }
      el.style.transform =`perspective(500px) translate3d(${x}%, ${y}%, ${ez}px)`;
      nativeRAF(() => {
        el.removeAttribute('style');
      })
    },
    handleBeforeLeave(el){
      el.style.zIndex = 1;
    },
    handleLeave(el){
      const {ex, ey, ez} = _rdm();
      let x, y;
      if(this.isPush){
        x = -ex;
        y = -ey;
      } else {
        x = ex;
        y = ey;
      }
      el.style.transform =`perspective(500px) translate3d(${x}%, ${y}%, ${ez}px)`;
    },
    change(){
      this.key = this.key === 1 ? 2 : 1;
    },
    handleAfterLeave(el){
      el.removeAttribute('style');
      this.isPush = !this.isPush;
      setTimeout(() => {
        this.change();
      })
     
    }
  },
  mounted(){
      setTimeout(() => {
        this.change();
      })
  }
}
</script>
<style>
.index_tra_wrap{
  width: 280px;
}
.index_tra {
  margin: 0 auto;
  width: 120px;
  height: 150px;
  line-height: 150px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #eee;
  position: relative;
  border: 1px solid #ddd;
}
.index_tra-item{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 25px;
  text-align: center;
  background-color: #fff;
}
.tra-enter-active, .tra-leave-active{
  transition: all 1.5s ease;  
}
</style>