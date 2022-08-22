import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import VueMeta from 'vue-meta'

import TaskView from '@/views/TaskView.vue';
import AboutView from '@/views/AboutView.vue';
import PerfomanceView from '@/views/PerfomanceView.vue';

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Tarefas',
    component: TaskView,
  },
  {
    path: '/performance',
    name: 'Desempenho',
    component: PerfomanceView,
  },
  {
    path: '/about',
    name: 'Sobre',
    component: AboutView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
