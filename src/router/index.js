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
      path: '/rgpd-notice',
      name: 'rgpd',
      component: () => import('../views/RgpdNotice.vue'),
    },
    {
      path: '/contributions',
      name: 'contributions',
      component: () => import('../views/Contributions.vue'),
    },
    {
      path: '/advices',
      name: 'advices',
      component: () => import('../views/Advices.vue'),
    },
    {
      path: '/advice',
      name: 'advice',
      component: () => import('../components/Advice.vue'),
      children: [
        {
          path: 'battery',
          name: 'battery',
          component: () => import('../components/advices/Battery.vue'),
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutUs.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
    },
  ],
});

export default router;
