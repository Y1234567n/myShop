// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import ListPullLoading from 'list-pull-loading'
// import 'list-pull-loading/dist/list-pull-loading.css'

// VUE use
// Vue.use(ListPullLoading);
import App from './App'
import store from './vuex'
import router from './router'
import './mockData/mockServer'
import 'lib-flexible/flexible'
// import rem from '../static/js/rem'
//   rem()
// Vue.use(ListPullLoading)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
