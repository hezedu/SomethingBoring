<template>
  <div id="app">
    <h1>上传文件夹</h1>
    <input type='file' name="file" @change="handleChange" webkitdirectory />
    <button @click="upload">upload</button>
    <pre>{{data}}</pre>
  </div>
</template>
<script>
const $ = window.$;
var  files = [];
$(document).ready(function(){
  $("input").change(function(){
    files = this.files;
  });
});

export default {
  data(){
    return {
      data: {}
    }
  },
  methods:{
    handleChange(e){
      //files = $(e.target).files;
      console.log('files', e.target.files);
    },
    upload(){
      const self = this;
      var fd = new FormData();
      for (var i = 0; i < files.length; i++) {
        fd.append("file", files[i]);
      }
      $.ajax({
        url: "http://192.168.56.101:4000/uploadFolder",
        method: "POST",
        data: fd,
        contentType: false,
        processData: false,
        cache: false,
        success: function(data){
          console.log('success', data);
        }
      });
    }
  }
}
</script>
