import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      name: 'About',
      path: '/about',
      component: () => import('../views/about.vue'),
    },
    {
      name: 'License',
      path: '/license',
      component: () => import('../views/license.vue'),
    },
    {
      name: 'Chambers',
      path: '/chambers',
      component: () => import('../views/chambers.vue'),
    },
    {
      name: 'Verification',
      path: '/verification/:id',
      component: () => import('../views/Verification/[id]/index.vue'),
    },
    {
      name: 'VerificationDetails',
      path: '/verification/:id/details',
      component: () => import('../views/Verification/[id]/details.vue'),
    },
  ],
})

export default router
