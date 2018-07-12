import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


import App from './App.vue'


Vue.use(Vuex)
Vue.use(VueRouter)
Vue.prototype.$axios = axios
Vue.use(ElementUI)


new Vue({
  el: '#app',
  render: h => h(App)
})
