import { createRouter, createWebHistory } from 'vue-router'
import SignUpPage from '../pages/SignUpPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: SignUpPage
    }
  ]
})

export default router
