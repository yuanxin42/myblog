/*
 * @Author: your name
 * @Date: 2020-01-08 11:45:58
 * @LastEditTime : 2020-01-16 14:41:48
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myblog/src/main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// https://segmentfault.com/a/1190000010291674
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import sir from './components/utils/index.js'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$ajax = axios
Vue.use(ElementUI)
Vue.use(sir)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
