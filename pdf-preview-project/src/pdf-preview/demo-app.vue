<style>
*{
  box-sizing: border-box;
}
html, body{
  margin: 0; padding:0;
}

html, body, .h100{
  height: 100%;
}
body{
  height: 3000px;background-color: dodgerblue;
}
.h100{overflow: hidden;
  justify-content: center;
  align-items: dodgerblue;
  width: 100%;
  display: flex;
}
.show{
  background-color: #fff;height: 300px;width: 300px;
  text-align: center;margin-top: 300px;
}
h1{
  text-align: center;
}
.pdfurl{
  font-size: 14px;width: 100%;
}
</style>
<template>
<div id="app" class="h100">
  <div class="show">
  <h1>PDF preview</h1>
  <input disabled="true" class="pdfurl" :value="pdfUrl" />
    <button style="margin-top: 40px;font-size:2em;" @click='handleClick'>open</button>
</div>
<PDFPreview workerSrc= 'https://cdn.bootcss.com/pdf.js/1.9.456/pdf.worker.min.js' />
<!-- <PDFPreview workerSrc= '/static/pdf-1.9.450.worker.min.js' /> -->
</div>
</template>

<script>
import Vue from 'vue';
import PDFPreview from './pdf-preview.vue';
console.log(window.PDFJS);
let pdfUrl = '/static2/1701.00002.pdf'
pdfUrl = '/static2/1701.00002.pdf'
export default {
  components: {
    PDFPreview
  },
  data(){
    return {
      pdfUrl
    }
  },
  methods: {
    handleClick(){
      PDFPreview.open(this.pdfUrl);
      //store.commit('open', this.pdfUrl);
      this.pdfUrl = (pdfUrl ===  this.pdfUrl) ? '/static/tracemonkey.pdf' : pdfUrl;
    }
  }
}
//store.commit('open', pdfUrl);
</script>
