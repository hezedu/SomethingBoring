<template>
<PdfMain v-if="pdfUrl" :pdfUrl='pdfUrl' :close='close' />
</template>

<script>
import PdfMain from './pdf-preview-main.vue';
var liveCount = 0;
var data = {
  pdfUrl: null
}
var self;
export default {
  components: {
    PdfMain
  },
  props: ['workerSrc'],
  data(){
    return data
  },
  open(url){
    document.body.style.overflow = 'hidden';
    data.pdfUrl = url;
  },
  methods: {
    close(){
      document.body.style.overflow = '';
      this.pdfUrl = null;
    }
  },
  mounted(){
    if(liveCount > 0){
      this.$destroy();
      throw new Error('pdf-preview 只能有一个实例.')
    }
    liveCount ++;
    var PDFJS = window.PDFJS;
    PDFJS.workerSrc = this.workerSrc;
    
    //PDFJS.disableAutoFetch = true;
    //PDFJS.disableStream = true;


    PDFJS.disableRange = true; //for mozilla
    PDFJS.disableFontFace = true;//for mozilla
  },
  // destroyed (){
  //   console.log('destroyed')
  // }
}
</script>
