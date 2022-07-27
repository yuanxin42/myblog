import Vue from 'vue'
import App from './App.vue'
import sir from './components/common/index.js'
import router from './router';
import "@/assets/css/common.less";
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/element/index.css'
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(sir)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
