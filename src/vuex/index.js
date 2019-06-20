import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import homes from './model/home'
Vue.use(Vuex)

/* eslint-disable no-new */
export default new Vuex.Store({
  actions,
  mutations,
  getters,
  modules: {
    homes
  }
})
