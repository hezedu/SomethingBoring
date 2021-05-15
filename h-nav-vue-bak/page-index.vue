<template>
<div class="index_page home">
  <div class="index_wrap hero">
  <header>
    <h1>History Navigation Vue</h1>
    <p class="description"></p>
    <h2 class="index_desc">
      <!-- The native-like <b>Navigation</b> for web apps<br> Base on HTML5 <b>History</b><br>implemented by <b>Vue</b> -->
      The native-like Navigation for your Vue Web apps
    </h2>
    </header>

    
    <div class="index_diff">
     <div class="index_diff_item">
          <div class="index_diff_title">Normal single-page app</div>
          <div class="index_diff_body">
            <DiffStart v-if="currAni === 'start'" @diffStart="handleDiffStart" type="normal" />
            <DiffList v-if="currAni === 'list'" type="normal" :isBack="isDetailBacked" @diffGoToDetail="handleDiffGoToDetail" @diffGotoStart="handleDiffGotoStart" />
            <DiffDetail v-if="currAni === 'detail'" type="normal" @diffBackToList="handleDiffBackToList" />
          </div>
     </div>
      <div class="index_diff_item">
          <div class="index_diff_title">Use history-navigation-vue</div>

          <div class="index_diff_body">
            <div class="index_diff_body_h_nav"
            :class="{index_diff_body_h_nav_first_load: firstLoad}"
            :style="{left: (currAniMap.start - currAniMap[currAni]) + '00%'}">

              <transition name="index_diff_fade">
                <DiffStart v-if="currAni === 'start'"  />
              </transition>

            </div>

            <div 
            class="index_diff_body_h_nav" 
            :style="{left: (currAniMap.list - currAniMap[currAni]) + '00%'}">

                <transition name="index_diff_fade">
                  <keep-alive v-if="currAni !== 'start'">
                    <DiffList v-if="currAni === 'list'"
                      :isBack="isDetailBacked"  />
                    </keep-alive>
                  </transition>
            </div>
            <div class="index_diff_body_h_nav" 
            :style="{left: (currAniMap.detail - currAniMap[currAni]) + '00%'}">
              <transition name="index_diff_fade">
                <DiffDetail v-if="currAni === 'detail'" />
              </transition>
            </div>

          </div>
        </div>
    </div>
    <div class="index_table_wrap">
      <h2>Compared with the Vue official Router</h2>
      <table>
        <tr>
          <th>Feature</th>
          <th>vue-router</th>
          <th>history-navigation-vue</th>
        </tr>
        <tr>
          <td class="index_table_f">Previous pages keep alive</td>
          <td><i>No</i></td>
          <td>
            <b>Yes</b>
          </td>
        </tr>
        <tr>
          <td class="index_table_f">Routing behavior recognition</td>
          <td><i>No</i></td>
          <!-- <td><b>push, back, replace, forward</b></td> -->
          <td><b>Yes</b></td>
          <!--  push, repalce, back, forwrd</td> -->
        </tr>
        <tr>
          <td class="index_table_f">Page transition animation</td>
          <td><i>No</i></td>
          <td><b>Yes</b></td>
        </tr>
        <tr>
          <td class="index_table_f">Back to the initial state of history</td>
          <td><i>No</i></td>
          <td><b>Yes</b></td>
        </tr>
        <tr>
          <td class="index_table_f">Tabbar mode</td>
          <td><i>No</i></td>
          <td><b>Yes</b></td>
        </tr>
      </table>
    </div>
    <!-- <h2>Quick example</h2> -->
    <!-- <h2>Simple to Use</h2> -->
    <!-- <h2>Quick example</h2> -->

  <p class="action"><a href="./docs.html" class="nav-link action-button">
  Get Started →
</a></p>
  </div>
</div>
  
</template>
<script>
import DiffList from './index/diff/list.vue';
import DiffDetail from './index/diff/detail.vue';
import DiffStart from './index/diff/start.vue';

export default {
  components: {
    DiffStart,
    DiffList,
    DiffDetail
  },
  data(){
    // let arr = [];
    // let i = 0;
    // for(;i < 99999; i++){
    //   arr.push(i);
    // }
    return {
      now: Date.now(),
      h: 100,
      step: 0,
      currAni: '',
      // perfList: arr,
      currAniMap: {
        'start': 1,
        'list': 2,
        'detail': 3
      },
      isDetailBacked: false,
      behavior: 'loaded',
      firstLoad: true
    }
  },
  methods: {
    handleDiffEnd(){
      this.step = this.step === 2 ? 0 : this.step + 1;
    },
    test(){
      this.h = this.h === 100 ? 200 : 100;
    },

    handleDiffStart(){
      this.behavior = 'push';
      this.currAni = 'list';
    },
    handleDiffGoToDetail(){
      this.behavior = 'push';
      this.currAni = 'detail';
    },
    handleDiffGotoStart(){
        this.behavior = 'back';
        this.isDetailBacked = false;
        this.currAni = 'start';
    },
    handleDiffBackToList(){
      this.isDetailBacked = true;
      this.behavior = 'back';
      this.currAni = 'list';
    },
  },
  mounted(){
    setTimeout(() => {
      this.currAni = 'start';
        this.firstLoad = false;
    }, 300)
  },
  destroyed(){
    console.log('index destroyed');
  }
}
</script>
<style>

.index_to_list{
  padding-top: 150px;
  text-align: center;
  display: block;
}

.index_page{
  background: #fff;
  min-height: 100vh;
}
.index_page *{
  box-sizing: border-box;
}
.index_page h2 {
  border: 0;
  margin-bottom: 0;
  padding-bottom: .8em;
}
.index_title{
  font-size: 3rem;
  text-align: center;
}
h2.index_desc{
  color: #6a8bad;
  margin-top: 0;
  text-align: center;
  font-size: 1.6rem;
  line-height: 1.3;
  border-bottom: 0;
  /* padding-bottom: .5em; */
}
/* .index_desc b{
  color: #2c3e50;
} */
/* .index_page h1, .index_page h2 {
  text-align: center;
}



.index_page h2 b{
  color: #000;
} */

.index_diff{
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 488px;
  margin: 0 auto;
}



.index_diff_item{
  height: 100%;
  width: 47%;
  flex-shrink: 0;
  padding-top: 35px;
  height: 430px;
  background: #eee;
  position: relative;
  
}

.index_diff_title{
  position: absolute;
  left: 0;
  top: 0;
  background: #fff;
  line-height: 35px;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  height: 35px;
  font-size: 16px;
}

.index_diff_item .loader{
  color: #000;
  font-size: 30px;
}

.index_diff_body{
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  background-color: #fff;
}

.index_diff_page{
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  overflow: auto;
  transition: all .3s;
}

/* .index_diff_fade-enter, .index_diff_fade-leave-to {
  opacity: 0;
} */

/* .index_diff_body_h_nav_first_load {
  transform: translateY(-100%);
} */


.index_diff_loading_wrap{
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
}

.index_diff_start_wrap{
  text-align: center;

}
.index_diff_start_top{
  padding-top: 20%;
}
.index_diff_start_use{
  color: #666;
  margin-bottom: .5em;
}
.index_diff_start_bottom{
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.index_diff_list_item {
  height: 100px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  border-radius: 3px;

}

.index_diff_page_wrap{
  padding-top: 30px;
}

.index_diff_page_inner{
  height: 100%;
}

.index_diff_page_titlebar{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #ddd;
  color: #333;
}

.index_diff_page_back{
  position: absolute;
  top: 5px;
  left: 0;
  font-size: 12px;
  padding-left: 5px;
  padding-right: 5px;
  line-height: 20px;
  color: #000;
  border-radius: 2px;
}

.index_diff_list{
  padding: 10px;
  overflow: auto;
  pointer-events: none;
  scrollbar-color: #ddd transparent;
  scrollbar-width: thin;
}

.index_diff_list::-webkit-scrollbar{
  width: 5px;
  height: 100%;
}

::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 2px;
}

.index_diff_loading_more{
  height: 30px;
  font-size: 14px;
  color: #666;
  position: relative;
}

a {
  cursor: pointer;
}
.h-nav-active{
  opacity: 1;
}
.api_nav.h-nav-active{
  color: #000;
  font-weight: bold;
}

.index_diff_page_detail{
  padding: 1px;
  text-align: center;
  font-size: 50px;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
}

.index_diff_body_h_nav{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transition: all .3s;
}

.index_table_wrap{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.index_table{
  border-collapse: collapse;
  border-color: #ccc;
  border: 0;
  margin: 0;
}

.index_table th{
  background-color: #eee;
}

.index_table th, .index_table td{
  padding: 3px 12px;
}

td.index_table_f{
  text-align: left;
}

.index_table i{
  color: #999;
}


.index_diff_loading{
  cursor: auto;
}

.index_diff_loading::before {
  padding:0;
  margin:0;
  position: absolute;
  top:0;
  bottom:0;
  right:0;
  left:0;
  margin:auto;
  height: 13px;
  width: 13px;
  animation: rotate 0.8s infinite linear;
  border: 3px solid #999;
  border-right-color: #fff;
  border-radius: 50%;
}

.index_diff_loading::before{
  content: '';
}

@keyframes rotate { 
  0%    { transform: rotate(0deg); }
  100%  { transform: rotate(360deg); }
}

.index_diff_loading_more .index_diff_loading::before{
  width: 9px;
  height: 9px;
  border-width: 2px;
}
.index_diff_start_link{
  text-decoration: underline;
  padding: 3px 10px;
  border-radius: 5px;
  color: #333;
}

.index_diff_list_item_active, 
.index_diff_page_back_active, 
.index_diff_start_active{
  transition: all .15s;
  background-color: #bbb;
  color: #fff;
}
.index_diff_start_active{
  text-decoration: none;
}
/* .index_codepen_wrap{
  width: 100%;
  margin: 0 auto;
  height: 565px;
  display: flex;
} */

.index_get_start{
  text-align: center;
  font-size: 30px;
  margin-top: 20px;
  padding-bottom: 50px;
}

</style>