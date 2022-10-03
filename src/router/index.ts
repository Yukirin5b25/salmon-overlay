import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overlay',
      component: () => import('../views/CombatantOverlay.vue')
    },
    {
      path: '/overlay',
      name: 'overlay',
      component: () => import('../views/CombatantOverlay.vue')
    }
  ]
})

export default router
