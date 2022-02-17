import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 引入
import * as echarts from 'echarts'

Vue.config.productionTip = false

// 注册到原型链上
Vue.prototype.$echarts = echarts

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
