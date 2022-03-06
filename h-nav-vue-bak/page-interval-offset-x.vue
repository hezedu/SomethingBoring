<style>
.i_o_x{
  height: 284px;
  width: 100%;
  max-width: 380px;
  display: flex;
  justify-content: space-between;
}
.i_o_x_wrap{
  position: relative;
  width: calc(50% - 1px);
  max-width: 160px;
  height: 100%;
  overflow: hidden;
}
.i_o_x_item{
  position: absolute;
  width: 100%;
  height: 100%;
  animation-iteration-count: infinite;
  animation-duration: 3s;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.i_o_x_item:first-child{
  background-color: #eee;
}
.i_o_x_item:last-child{
  background-color: #ccc;
}
.i_o_x_item33_p1{
  z-index: 1;
  animation-name: i_o_x33_p1;
}
.i_o_x_item100_p1{
  z-index: 1;
  animation-name: i_o_x100_p1;
}
.i_o_x_item_p2{
  z-index: 2;
  animation-name: i_o_x100_p2;
}

@keyframes i_o_x100_p1 {
  0% {
    left: -100%;
  }
  50% {
    left: 0;
  }
  100% {
    left: -100%;
  }
}
@keyframes i_o_x33_p1 {
  0% {
    left: -33%;
  }
  50% {
    left: 0;
  }
  100% {
    left: -33%;
  }
}
@keyframes i_o_x100_p2 {
  0% {
    left: 0;
    
  }
  50% {
    left: 100%;
  }
  100% {
    left: 0;
  }
}
</style>
<template>
<div class="i_o_x">
  <div class="i_o_x_wrap">
    <div class="i_o_x_item i_o_x_item33_p1">
     <h1>33</h1></div>
    <div class="i_o_x_item i_o_x_item_p2">
      <h1>33</h1></div>
  </div>
  <div class="i_o_x_wrap">
    <div class="i_o_x_item i_o_x_item100_p1">
      <h1>100</h1></div>
    <div class="i_o_x_item i_o_x_item_p2">
      <h1>100</h1></div>
  </div>
</div>
  
</template>