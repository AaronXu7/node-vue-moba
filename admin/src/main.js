import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import './common/common.css'

Vue.config.productionTip = false

// 全局axios
import http from './network/request'
Vue.prototype.$http = http

// 全局设置
const userMsg = {
  name:'未登录'
}
Vue.prototype.$userMsg = userMsg
Vue.mixin({
  computed:{
    uploadURL(){
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods:{
    getAuthorization(){
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
