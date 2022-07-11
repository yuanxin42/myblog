import Vue from 'vue'
import App from './App.vue'
import sir from './components/common/index.js'
import router from './router';

Vue.config.productionTip = false
Vue.use(sir)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
