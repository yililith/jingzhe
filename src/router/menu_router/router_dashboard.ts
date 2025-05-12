import type { RouterModel } from '@/model/model_router.ts'
import { h } from 'vue'

import {
  IconHome,
} from '@arco-design/web-vue/es/icon'

export const dashboardMap = new Map<string, RouterModel>


dashboardMap.set('dashboard', {
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('@/views/dashboard/index.vue'),
  meta: {
    title: '主页',
    icon: h(IconHome),
    type: 'dashboard',
    grade: 'one',
  }
})
