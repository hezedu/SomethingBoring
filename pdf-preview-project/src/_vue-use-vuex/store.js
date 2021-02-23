import Vuex from 'vuex';

const store = new Vuex.Store({
  state: {
    isSelect: false
  },
  mutations: {
    selectStart (state) {
      state.isSelect = true;
    }
  }
});

export default store;
