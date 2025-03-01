<style>
.f_inputs {
  width: 100%;
}
.f_inputs > .f_input_wrap {
  margin-bottom: 19rpx;
}
</style>
<template>
  <view class="f_inputs">
    <Finput v-for="(item, index) in addedList" 
      :key="item.id" 
      :list="readList"
      :content="item.regionName"
      :placeholder="placeholder"
      @select="handleSelect(index, $event)">
    </Finput>
    <button class="c_def_btn" @click="handleClick" :disabled="addedList.length > LIMIT">继续添加运营地区</button>
  </view>
  
  </template>
  <script>
  import Finput from './filter_input.vue';
  let id = 0;
  function genItem(){
    id = id + 1;
    return {
      id,
      dealersRegionId: 0,
      regionName: ''
    }
  }
  export default {
    components: {
      Finput
    },
    props: ['placeholder', 'selectedList', 'list'],
    data(){
      let addedList;
      if(this.selectedList && this.selectedList.length){
        addedList = this.selectedList.map(v => {
          return Object.assign(genItem(), v);
        });
      } else {
        addedList = genItem();
      }
      return {
        addedList,
        LIMIT: 30
      }
    },
    computed: {
      readList(){
        const map = new Map;
        this.addedList.forEach(item => {
          map.set(item.dealersRegionId, true);
        })
        return this.list.filter(v => {
          if(map.get(v.dealersRegionId)){
            return false;
          }
          return true;
        });
      }
    },
    methods: {
      handleClick(){
        this.addedList.push(genItem());
      },
      handleSelect(index, selectedItem){
        const item = this.addedList[index];
        if(item){
          item.regionName = selectedItem.regionName;
          item.dealersRegionId = selectedItem.dealersRegionId;

          this.$emit('select', this.addedList.map(v => {
            return {
              regionName: v.regionName,
              dealersRegionId: v.dealersRegionId
            }
          }));
        }
      }
    }
  }
  
  </script>