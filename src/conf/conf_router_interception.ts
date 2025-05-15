import router from '@/router'
import { storeToken } from '@/stores/store_token.ts'
import { storeRouter } from '@/stores/store_router.ts'
import { storeMenu } from '@/stores/store_menu.ts'
import type { acceptMenuModel } from '@/model/model_menu.ts'
import routerMap from '@/router/router.ts'
import type { RouterModel } from '@/model/model_router.ts'
import { type RouteRecordRaw, useRouter } from 'vue-router'

router.beforeEach((to, from, next) => {
  const tokenStore = storeToken()
  const routerStore = storeRouter()
  const menuStore = storeMenu()

  const router = useRouter()
  if (tokenStore.token !== '') {
    if (to.path === '/login') {
      next('/')
      return
    } else {
      if (routerStore.isAddRouter) {
        next()
        return
      } else {
        const routerMap = menuToRouter(menuStore.menuList)

        routerMap.forEach((item: RouterModel, _: string) => {
          router.addRoute('home', item as RouteRecordRaw)
        })
        routerStore.changeIsAddRouter(true)
        next('/')
        return
      }
    }
  } else {
    if (to.path === '/login') {
      next()
      return
    } else {
      next('/login')
      return
    }
  }
})
// 菜单权限转路由
const menuToRouter = (menus: acceptMenuModel[]): Map<string, RouterModel> => {
  const routers = routerMap
  const routersMap: Map<string, RouterModel> = new Map()
  // 后端数据转为前端数据
  menus.forEach((item: acceptMenuModel) => {
    const routerInfo = routers.get(item.name)
    if (item.level === 'two') {
      routersMap.get(item.type)?.children?.push(routerInfo!)
    } else {
      routersMap.set(item.name, routerInfo!)
    }
  })
  return routersMap
}

