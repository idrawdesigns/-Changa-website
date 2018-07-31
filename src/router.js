import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Solution from './views/Solution.vue';
import How from './views/How.vue';
import AfricaLeads from './views/AfricaLeads.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/solution',
      name: 'solution',
      component: Solution,
    },
    {
      path: '/how',
      name: 'how',
      component: How,
    },
    {
      path: '/africa-leads',
      name: 'africa-leads',
      component: AfricaLeads,
    },
  ],
});
