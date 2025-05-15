import index from '@/layout/index.vue'
import login from '@/views/login/index.vue'
export const initRouter = () => {
  return [
    {
      path: '/',
      name: 'home',
      component: index,
      redirect: '/dashboard',
      children: []
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
}
