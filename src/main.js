import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.myListen = myListen

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

function myListen (element, eventStr, callback) {
  if (element.addEventListener) {
    // 大部分浏览器兼容的方式
    element.addEventListener(eventStr, callback, false)
  } else {
    /*
      * this是谁，由调用方式决定
      * callback.call(element)
      */
    // IE8及以下
    element.attachEvent('on' + eventStr, function () {
      // 在匿名函数 function 中调用回调函数callback
      callback.call(element)
    })
  }
}
