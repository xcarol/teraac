import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/legal-notice',
      name: 'legal',
      component: () => import('../views/LegalNotice.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/AboutUsPage.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../components/ServicesPage.vue'),
    },
  ],
});

export default router;
