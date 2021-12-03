import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
//挂载 modules
// import interview from './modules/interview'
import sign from './modules/sign'

export default new Vuex.Store({
  state: {
    info: {}
  },
  mutations: {
    // 更新全局的state
    updateState(state, payload) {
      state.info = payload;
    },
    
  },
  modules: {
    sign
  }
})

