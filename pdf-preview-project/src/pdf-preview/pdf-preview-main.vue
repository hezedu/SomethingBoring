<style>


/* pdf css api */

.dw-pdf-wrap{
  text-align: center;height: 100%;
  box-sizing: border-box;
  padding-top: 35px;
  position: fixed;
  z-index: 10;
  top:0; left:0; right:0; left:0;
  background-color: rgba(0, 0, 0, 0.5);
}
.dw-pdf-body{
  height: 100%;overflow-y: auto;
}
/* 导航栏 */
.dw-pdf-nav{
  width: 100%;
  height: 35px; line-height: 35px;
  top: 0;left:0;
  position: absolute; margin: 0;background-color: #eee;
  text-align: center;
}
/* 上一页, 下一页, 关闭按钮 */
.dw-pdf-prev-page-btn,
.dw-pdf-next-page-btn,
.dw-pdf-close-btn{
  font-weight: bold;
}
.dw-pdf-loading, .dw-pdf-error{
  color:#fff; font-size: 2em; text-align: center;
  position: absolute;width: 100%; top:0; bottom:0; margin:auto;
  height: 2em;
  line-height: 2em;
}
.dw-pdf-error{
  color: red;
}
</style>
<template>
<div class="dw-pdf-wrap">
  <div class="dw-pdf-nav">
    <button class="dw-pdf-prev-page-btn" :disabled='currNum <= 1' @click='prev'>上一页</button>
    <!-- <input class="dw-pdf-input-page-num" v-model='currNum' />-->
    {{currNum}}/{{total}}
    <button class="dw-pdf-next-page-btn" :disabled='currNum >= total' @click='next'>下一页</button>
    <button class="dw-pdf-close-btn" @click='close'>关闭</button>
  </div>
  <div class="dw-pdf-body" ref='body'>
    <div class='dw-pdf-error' v-if='error'>{{error}}</div>
    <div class="dw-pdf-loading" v-else v-show="loadingTask">正在加载。。。</div>
    <canvas ref='canvas'></canvas>
  </div>
</div>
</template>

<script>

export default {
  props: ['pdfUrl', 'close'],
  data(){
    return {
      total: 0,
      currNum: 0,
      loadingTask: false,
      pageRendering: false,
      page: null,
      error: ''
    }
  },
  methods:{
    // close(){
    //   store.commit('close');
    // },
    prev(){
      this.currNum --;
    },
    next(){
      this.currNum ++;
    },
    getPage(v){
      if(!this.pdfUrl || this.pageRendering){
        return;
      }
      this.pageRendering = true;
      this.$refs.body.scrollTop  = 0;
      const self = this;
      self.$options._pdf.getPage(v).then(function(page) {
        const _currNum = v;
        var scale = 1.5;
        var viewport = page.getViewport(scale);
        var canvas = self.$refs.canvas;
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        var renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        var renderTask = page.render(renderContext);
        renderTask.then(function () {
          self.pageRendering = false;
          if(self.currNum !== _currNum){
            //console.log('re rendered new', _currNum, self.currNum);
            self.getPage(self.currNum);
          }
          //console.log('Page rendered');
        });
      });
    },
    createPDF(url){
      if(!url) return;
      var self = this;
      var PDFJS = window.PDFJS;
      ////console.log(Object.keys(PDFJS))
      const task = PDFJS.getDocument(url);
      self.loadingTask = true;
      task.then(function(pdf) {
        //console.log('loadingTask', Object.keys(task))
        self.loadingTask = false;
        self.total = pdf.numPages;
        self.$options._pdf = pdf;
        self.currNum = 1;
      }).catch(function(e){
        self.error = '错误：' + e.name + '#' + e.message;
      });
    }
  },
  watch: {
    currNum(v){
      // v = Number(v);
      // if(isNaN(v) || v < 1 || v > this.total){
      //   return;
      // }
      // console.log('v', v);
      this.getPage(v);
    }
  },
  mounted(){
    this.createPDF(this.pdfUrl);
  }
}
</script>
