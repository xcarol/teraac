import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Landing.vue'),
    },
    {
      path: '/legal-notice',
      name: 'legal',
      component: () => import('../views/LegalNotice.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutUs.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Services.vue'),
    },
  ],
});

export default router;
