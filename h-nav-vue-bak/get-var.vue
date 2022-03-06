
<template>
<span>{{value}}</span>
</template>
<script>
export default {
  props: {
    main: {
      type: String,
      default: '$site'
    },
    sub: {
      type: String
    },
    handle: {
      type: String
    }
  },
  computed: {
    value(){
      let main = this[this.main];
      if(this.sub){
        main = main[this.sub];
      }
      if(this.handle){
        let handler = handleMap[this.handle];
        if(handler){
          main = handler(main);
        }
      }
      return main;
    }
  }
}

const  handleMap = {
  firstToLowerCase(str){
    let first = str[0];
    return first.toLowerCase() + str.substr(1);
  }
}
</script>