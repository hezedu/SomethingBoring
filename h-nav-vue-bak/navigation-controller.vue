
<template>
<div class="h-nav-ctrler">
  <DoubleTransition  
    v-for="v in stackMap" 
    :key="v.stackId"
    :uniqueKey="v.stackId"
    :params="v.transition"
    :isShow="v.isActive"
    :isLoad="v.isLoad"
    @unloaded="handleUnloaded(v)">

      <TabCtrler v-if="v.isTab"
        :currTabPage="v"
        :style="{zIndex: v.zIndex}"
        :isActive="v.isActive"
        :isFirstLoad="isFirstLoad"
      />
      
      <Page v-else
        transitionName="h-nav-page"
        :path="v.path"
        :title="v.title"

        :isTab="v.isTab"
        :tabIndex="v.tabIndex"
        :stateKey="v.stateKey"
        :route="v.route"
        :style="{zIndex: v.zIndex}"
        :isActive="v.isActive"
        :isFirstLoad="isFirstLoad">
          <component :is="v.cmptKey" />
      </Page>

  </DoubleTransition>
</div>

</template>
<script>
import DoubleTransition from './double-transition.vue';
import Page from './page.vue';
import TabCtrler from './tab-bar-controller.vue';
export default {
  components: {
    DoubleTransition,
    Page,
    TabCtrler
  },
  name: 'HistoryNavigationController',
  props: {
    entryPagePath: {
      type: String
    }
  },

  data(){
    return {
      isFirstLoad: true,
      stackMap: this.$navigator._h.stackMap,
      behavior: this.$navigator._h.behavior,
      currentPage: this.$navigator._h.currentPage
    }
  },
  methods: {
    handleUnloaded(v){
      this.$delete(this.stackMap, v.stateKey);
    }
  },
  created(){
    this.$navigator._h._load(this.entryPagePath);
    this.$nextTick(() => {
      this.isFirstLoad = false;
    })
    
  }
}
</script>
