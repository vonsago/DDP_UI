import Vue from 'vue';
import Router from 'vue-router';

//home 
import Home from '@/view/pages/home/home.vue';


Vue.use(Router);

const router = new Router({
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      return { x: 0, y: 0 };
    },
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
          public: true,
        },
      }]
    });

export default router;