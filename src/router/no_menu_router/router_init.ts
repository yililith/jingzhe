import index from '@/layout/index.vue'

export const initRouter = () => {
  return [
    {
      path: '/',
      name: 'home',
      component: index,
      // redirect: '',
      children: []
    },
  ]
}
