import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/apex-charts',
    name: 'ApexCharts',
    component: () => import(/* webpackChunkName: "about" */ '../views/ApexCharts.vue'),
  },
  {
    path: '/vue-chart-js',
    name: 'VueChartjs',
    component: () => import(/* webpackChunkName: "about" */ '../views/VueChartjs.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
