<template>
<div class="index_tb" >
  <div class="index_tb_item_top"></div>
  <div class="index_tb_ar index_tb_ar_top">&uarr;</div>
  <div class="index_tb_item"></div>
  <div class="index_tb_ar">&rarr;<br>&larr;</div>
  <div class="index_tb_item"></div>
  <div class="index_tb_ar">&rarr;<br>&larr;</div>
  <div class="index_tb_item"></div>
</div>
</template>
<script>
export default {
  data(){
    return {
      list: [1, 2, 3]
    }
  },
  methods: {
  },
  mounted(){
  }
}
</script>
<style>
.index_tb {
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 10px;
  display: flex;
  position: relative;
  background-color: #eee;
  width: 280px;
  border-radius: 5px;
}

.index_tb_item, .index_tb_item_top {
  width: 50px;
  height: 50px;
  border: 1px solid #999;
  margin: 0 15px;
  background-color: #fff;
}

.index_tb_item_top{
  position: absolute;
  top: 10px;
  left: 5px;
  width: 40px;
  height: 40px;
}
.index_tb_ar {
  color: #999;
  font-size: 20px;
  line-height: 1;
  display: flex;
  align-items: center;
  width: 20px;
  text-align: center;
}
.index_tb_ar_top{
  position: absolute;
  top: 60px;
  left: 15px;
  width: 50px;
  text-align: center;
  justify-content: center;
}
</style>