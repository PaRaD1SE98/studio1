import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/News.vue')
    },
    {
      path: '/artists',
      name: 'artists',
      component: () => import('../views/Artists.vue')
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('../views/Works.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/Events.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/Shop.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    }
  ]
})

export default router