<template>
  <div style="width: 100%; height: 100%" />
</template>
<script>
export default {
  methods: {
    setOption(option){
      this.removeChart();
      const myChart = this.$options._cache_echart = window.echarts.init(this.$el);
      myChart.setOption(option);
    },
    removeChart(){
      if(this.$options._cache_echart){
        this.$options._cache_echart.dispose();
        this.$options._cache_echart = null;
      }
    }
  },
  destroyed(){
    this.removeChart();
  }
}
</script>