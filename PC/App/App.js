import Vue from 'vue'
import router from './router'
import apis from './Services/apis'
import mainTpl from 'Templates/MainTpl'

const $vue = Vue.prototype
$vue.$api = apis

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: {mainTpl},
  template: '<mainTpl/>'
  // template: '<router-view/>'
  // render: h => h(app)
})
