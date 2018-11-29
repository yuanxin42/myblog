// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// https://segmentfault.com/a/1190000010291674
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import sir from 'sirpackages'
import axios from 'axios'

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
