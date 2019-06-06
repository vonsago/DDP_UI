import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App.vue'
import router from '@/view/router/router';
import api from '@/core/api/index.js'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$api = api

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
