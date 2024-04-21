import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/providers-search',
    name: 'ProvidersSearch',
    component: () => import('@/views/ProvidersSearch.vue'),
  },
  {
    path: '/admin-page',
    name: 'AdminPage',
    component: () => import('@/views/AdminPage.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/Signup.vue'),
  },
  {
    path: '/services-search',
    name: 'ServicesSearch',
    component: () => import('@/views/ServicesSearch.vue'),
  },
  {
    path: '/add-provider',
    name: 'AddProvider',
    component: () => import('@/views/AddProvider.vue'),
  },
  {
    path: '/edit-provider/:id',
    name: 'EditProvider',
    component: () => import('@/views/EditProvider.vue'),
  },
  {
    path: '/provider-signup',
    name: 'ProviderSignup',
    component: () => import('@/views/ProviderSignup.vue'),
  },
  {
    path: '/verify-email/:token/:id',
    name: 'EmailVerified',
    component: () => import('@/views/EmailVerified.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
