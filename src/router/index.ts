import { createRouter, createWebHistory } from 'vue-router'
import SignUpPage from '../pages/SignUpPage.vue'
import SignInPage from '../pages/SignInPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: SignUpPage
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInPage
    }
  ]
})

export default router
