import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/legal-notice',
      name: 'legal',
      component: () => import('../views/LegalNotice.vue')
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('../components/AboutUsPage.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../components/ServicesPage.vue')
    }
  ]
})

export default router
