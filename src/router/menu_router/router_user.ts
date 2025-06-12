import type { RouterModel } from '@/model/model_router.ts'
import { h } from 'vue'

import {
  IconUser,
} from '@arco-design/web-vue/es/icon'


export const userMap = new Map<string, RouterModel>


userMap.set('user', {
    path: '/user',
    name: 'user',
    meta: {
        title: '用户',
        icon: h(IconUser),
        type: 'user',
        grade: 'one'
    },
    children: []
})

userMap.set('userTable', {
    path: '/user/table',
    name: 'userTable',
    component: () => import('@/views/user/userTable.vue'),
    meta: {
        title: '用户列表',
        type: 'user',
        grade: 'two'
    }
})