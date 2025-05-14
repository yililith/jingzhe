import { browse } from 'xe-utils'

import type { acceptMenuModel, MenuModel } from '@/model/model_menu.ts'
import routerMap from '@/router/router'


export const isMobile = (): boolean => {
  return browse().isMobile
}

// 把后端传来的菜单权限数据转为前端需要的菜单数据
export const setMenus = (menus: acceptMenuModel[]): MenuModel[] => {
  const routers = routerMap
  const menusMap: Map<string, MenuModel> = new Map()
  // 后端数据转为前端数据
  menus.forEach((item: acceptMenuModel) => {
    const routerInfo = routers.get(item.name)
    if (item.level === 'two') {
      menusMap.get(item.type)?.children?.push({
        path: routerInfo!.path,
        name: routerInfo!.meta.title
      })
    } else {
      menusMap.set(item.name, {
        path: routerInfo!.path,
        name: routerInfo!.meta.title,
        icon: routerInfo!.meta.icon,
        children: []
      })
    }
  })
  // 转为列表
  const menuList: MenuModel[] = []
  menusMap.forEach((item: MenuModel, _: string) => {
    menuList.push(item)
  })
  return menuList
}
