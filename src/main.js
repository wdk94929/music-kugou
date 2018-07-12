import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'
import elementUI from 'element-ui'


import App from './App.vue'


Vue.use(Vuex)
Vue.use(VueRouter)
Vue.prototype.$axios = axios
Vue.use(elementUI)


new Vue({
  el: '#app',
  render: h => h(App)
})
