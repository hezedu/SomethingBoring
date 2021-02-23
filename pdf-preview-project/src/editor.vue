<style>
pre{
  height: 500px;
  display: block;
  background-color: aqua;
  word-break: break-all;
}
</style>
<template>
<div>
  <pre ref='edit' @paste="handlePaste" contenteditable="true">
    abcafd
    <img data-type="cz22" src="https://ss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/9a6ea806.jpg">
    hahah
  </pre>
  <button @click="hanldeClick">OK</button>
  <pre>
    {{result}}
  </pre>
</div>
</template>

<script>
// https://www.samclarke.com/content-editable-pasting/
export default {
  data(){
    return {
      result: ''
    }
  },
  methods: {
    handlePaste(){
      console.log('handlePaste')
      setTimeout(() => {
        this.filterContent();
      }, 100)
    },
    hanldeClick(){
      this.result = this.$refs.edit.innerText;
      this.filterContent();
    },
    filterContent(){
      var doms = this.$refs.edit.getElementsByTagName('img');
      console.log('doms', doms)
      var removeArr = [], replaceArr = [];
      for(var i = 0, len = doms.length; i < len; i++){
        let img = doms[i];
        let t = img.dataset.type;
        if(t && t.indexOf('cz') === 0){
          replaceArr.push({img, name: t});
        }else{
          removeArr.push(img);
        }
      }
      replaceArr.forEach(obj => {
        obj.img.replaceWith('[[' + obj.name + ']]');
      })
      removeArr.forEach(img => {
        img.remove();
      })
    }
  }
}
</script>
