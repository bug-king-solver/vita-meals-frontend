import { createRouter, createWebHistory } from 'vue-router'
import SignUpPage from '../pages/SignUpPage.vue'
import SignInPage from '../pages/SignInPage.vue'
import ProductsPage from '../pages/ProductsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: ProductsPage
    },
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
