// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import echarts from 'echarts'
// import china from 'static/china.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import 'common/js/iconfont.js'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts //引入组件
Vue.prototype.$axios = axios 
// Vue.prototype.$china = china 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
