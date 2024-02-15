import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ProvidersSearch from '@/views/ProvidersSearch.vue';
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import ServicesSearch from '@/views/ServicesSearch.vue';
import AddProvider from '@/views/AddProvider.vue';
import EditProvider from '@/views/EditProvider.vue';


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
    component: ProvidersSearch,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/services-search',
    name: 'ServicesSearch',
    component: ServicesSearch,
  },
  {
    path: '/add-provider',
    name: 'AddProvider',
    component: AddProvider,
  },
  {
    path: '/edit-provider',
    name: 'EditProvider',
    component: EditProvider,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
