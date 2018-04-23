import Vue from 'vue'
import router from './router'
import apis from './Api/apis'

const $vue = Vue.prototype
$vue.$api = apis

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  // components: {app},
  template: '<router-view/>'
  // render: h => h(app)
})
