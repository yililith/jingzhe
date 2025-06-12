import type { RouterModel } from "@/model/model_router";
import { h } from "vue";
import {
    IconSettings,
} from '@arco-design/web-vue/es/icon';




export const settingsMap = new Map<string, RouterModel>



settingsMap.set('settings', {
    path: '/settings',
    name: 'settings',
    meta: {
        title: '设置',
        icon: h(IconSettings),
        type: 'settings',
        grade: 'one',
    },
    children: []
})

settingsMap.set('menus', {
    path: '/settings/menu',
    name: 'menuTable',
    component: () => import('@/views/settings/menus.vue'),
    meta: {
        title: '菜单列表',
        type: 'settings',
        grade: 'two'
    }
})


settingsMap.set('apis', {
    path: '/settings/api',
    name: 'apiTable',
    component: () => import('@/views/settings/apis.vue'),
    meta: {
        title: '接口列表',
        type: 'settings',
        grade: 'two'
    }
})