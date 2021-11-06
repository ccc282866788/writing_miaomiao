import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

const request = axios.create({
  timeout: 1000 * 6 // 创建axios实例,设定超时时间是12s
})
Vue.prototype.$axios = request
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
