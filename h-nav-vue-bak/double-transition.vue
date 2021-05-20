<style>
.hh-nav-page-wrap{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
.hh-nav-handle{
  width: 0!important;
  height: 0!important;
  border: 0!important;
  margin: 0!important;
  padding: 0!important;
  box-shadow: none!important;
  outline: none!important;
  position: static!important;
  transition-property: none!important;
  animation-name: none!important;
}

</style>
<template>
<transition 
  :appear="true"
  :duration="transition.duration"
  :type="transition.type"
  :enter-active-class="transition.enterActiveClass" 
  :leave-active-class="transition.leaverActiveClass" 
  enter-class=""
  leave-to-class=""
  leave-class=""
  enter-to-class=""
  >
  <div class="hh-nav-handle"  :key="uniqueKey" v-if="isRealLoad">
    
    <transition  
      :appear="true"
      :duration="transition.duration"
      :type="transition.type"
      :mode="transition.mode"

      :enter-class="transition.enterClass"
      :enter-active-class="transition.enterActiveClass" 
      :leave-active-class="transition.leaverActiveClass" 
      :leave-to-class="transition.leaveToClass"
      leave-class=""
      enter-to-class=""

      @before-enter="handleBeforeEnter"
      @before-leave="handleBeforeLeave">

        <div class="hh-nav-page-wrap" :key="uniqueKey" v-show="isRealShow">
          <slot />
        </div>

    </transition>
  </div>
</transition>

</template>
<script>
import { nativeRAF } from '../navigator/native';
import { genPageTransiton } from '../navigator/util';
export default {
  name: 'HistoryNavigationPageWrap',
  props: {
    params: {
      type: Object,
      required: true
    },
    uniqueKey: {
      type: [Number, String],
      required: true
    },
    isLoad: {
      type: Boolean,
      required: true
    },
    isShow: {
      type: Boolean,
      required: true
    }
  },
  data(){
    return {
      isRealShow: this.isShow,
      isRealLoad: this.isLoad,
      transition: genPageTransiton(this.params)
    }
  },
  watch: {
    isShow(){
      this.transition = genPageTransiton(this.params);
      this.$nextTick(() => {
        this.isRealShow = this.isShow;
        this.noTransition();
      })
    },
    isLoad(){
      if(this.isRealShow){
        this.transition = genPageTransiton(this.params);
        this.$nextTick(() => {
          this.isRealShow = false;
          this.$nextTick(() => {
            this.isRealLoad = false;
            this.noTransition();
            this.$emit('unloaded', this.uniqueKey);
          })
        })
      }
    }
  },
  methods: {
    noTransition(){
      this.transition = genPageTransiton({duration: 0});
    },
    // emitUnLoaded(){
    //   if(this.$options.__is_emit_unloaded){
    //     return;
    //   }
    //   this.$options.__is_emit_unloaded = true;
    //   this.$emit('unloaded', this.uniqueKey);
    // },
    handleBeforeEnter(el){
      el.removeAttribute('style');
      const t = this.transition;
      if(t.activeStyle){
        _setStyle(el, t.activeStyle);
      }
      if(t.actionStyle){
        _setStyle(el, t.actionStyle);
        nativeRAF(() => {
          _removeStyle(el, t.actionStyle);
        })
      }
    },
    handleBeforeLeave(el){
      el.removeAttribute('style');
      const t = this.transition;
      if(t.activeStyle){
        _setStyle(el, t.activeStyle);
      }
      if(t.actionStyle){
        nativeRAF(() => {
          _setStyle(el, t.actionStyle);
        })
      }
    },

    // henaldEnterCancelled(el){
    //   _removeStyle(el);
    // },
    // henaldAfterEnter(el){
    //   _removeStyle(el);
    // },

    // handleLeaveCancelled(el){
    //   _removeStyle(el);
    // },
    // handleAfterLeave(el){
    //   _removeStyle(el);
    // }
  }
}


function _setStyle(el, value){
  let i = 0, list = Object.keys(value), k,  len = list.length;
    for(; i < len; i++){
      k = list[i];
      el.style[k] = value[k];
    }
}

function _removeStyle(el, value){
  let i = 0, list = Object.keys(value), k,  len = list.length;
  for(; i < len; i++){
    k = list[i];
    delete(el.style[k]);
  }
}
</script>