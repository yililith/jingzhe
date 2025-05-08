import { createRouter, createWebHistory } from 'vue-router'
import { initRouter } from '@/router/no_menu_router/router_init.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: initRouter(),
})

export default router
