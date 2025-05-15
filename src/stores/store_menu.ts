import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { acceptMenuModel } from '@/model/model_menu.ts'

export const storeMenu = defineStore('menu', () => {
  const menuList = ref<acceptMenuModel[]>([])

  const addMenu = (menus: acceptMenuModel[]) => {
    menuList.value = menus
  }

  const removeMenu = () => {
    menuList.value = []
  }

  return {
    menuList,
    addMenu,
    removeMenu
  }
},{
  persist: true,
})
