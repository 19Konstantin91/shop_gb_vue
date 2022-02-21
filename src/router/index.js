import { createRouter, createWebHashHistory } from 'vue-router'

import index from '../views/index.vue'

import cart from '../views/cart.vue'

const routes = [
  { path: '/', component: index },
  { path: '/cart', component: cart }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
