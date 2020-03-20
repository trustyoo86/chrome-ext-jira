import Vue from 'vue';
import VueRouter from 'vue-router';

// pages
import Init from '../pages/Init.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Init',
    component: Init,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
