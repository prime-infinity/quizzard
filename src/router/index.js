import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/questions',
    name: 'Questions',
    component: () => import('../views/Questions.vue')
  },
  {
    path: '/results',
    name: 'Results',
    component: () => import('../views/Results.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
