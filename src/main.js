import Vue from 'vue'
import App from './App.vue'
import router from '@/view/router/router';
import ElementUI from 'element-ui';

Vue.config.productionTip = false;
Vue.use(ElementUI);
//Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
