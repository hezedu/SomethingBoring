

<style>
.f_input_wrap {
  width: 100%;
}
.f_list {
  padding-top: 20rpx;
  padding-bottom: 20rpx;
  background-color: #fff;
  width: 100%;
  margin-top: 10rpx;
}
.f_item {
  padding: 20rpx;
  font-weight: 400;
font-size: 28rpx;
color: #333333;
}

</style>
<template>
<view class="f_input_wrap">
  <input class="line_input" :placeholder="placeholder" v-model="currContent"  @input="hanldeInput"
  @focus="handleArea2Focus" @blur="handleArea2Blur"></input>

  <view class="f_list" v-show="fList.length && isShowList">
    <view class="f_item" v-for="item in fList" :key="item.dealersRegionId" @click="hanldeClick(item)">
      {{ item.regionName }}
  </view>
</view>
</view>
</template>
<script>
import request2 from '../utils/request2';
import AfterExec from '../utils/after_exec';
export default {
  props: ['placeholder', 'list', 'content', 'selectedMap'],
  data(){
    return {
      currContent: this.content,
      isShowList: false
    }
  },
  computed: {
    fList(){
      if(!this.currContent){
        return [];
      }
      return this.list.filter(v => {
        return v.regionName.indexOf(this.currContent) !== -1
      })
    }
  },
  watch: {
    content(){
      this.currContent = this.content;
    }
  },
  methods: {
    hanldeInput(e){
      this.$options._tmp_ae.trigger(e.timeStamp);
      this.$options._tmp_last_event = e;
    },
    search(){
      const e = this.$options._tmp_last_event;
      if(e.type === 'compositionstart' || e.type === 'compositionupdate'){
        return;
      }
      request2({
        url: '/api/gg/getRegionList',
        data: {
          regionName: this.currContent
        },
        success: data => {
          console.log('data', data);
        }
      });
    },
    handleArea2Focus(){
      this.isShowList = true;
    },
    handleArea2Blur(){
      setTimeout(() => {
        if(this.content !== this.currContent){
          this.currContent = this.content;
        }
          this.isShowList = false;
      });
    },
    hanldeClick(item){
      this.$emit('select', item);
    },

  },
  mounted(){
    this.$options._tmp_ae = new AfterExec(200, this.search);
  }
}

</script>