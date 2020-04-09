import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 通用配置
import './common/common.scss'
import './assets/iconfont/iconfont.css'

// 全局配置swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// 全局配置Card组件
import Card from './components/common/card/Card'
Vue.component('ax-card',Card)

// 配置axios
import http from './network/request'
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
