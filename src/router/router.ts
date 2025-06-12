import type { RouterModel } from '@/model/model_router.ts'
import { dashboardMap } from '@/router/menu_router/router_dashboard.ts'
import { userMap } from './menu_router/router_user'
import { settingsMap } from './menu_router/router_settings'


const routerMap = new Map<string, RouterModel>()

dashboardMap.forEach((value, key) => {
  routerMap.set(key, value)
})

userMap.forEach((value, key) => {
  routerMap.set(key, value)
})

settingsMap.forEach((value, key) => {
  routerMap.set(key, value)
})

export default routerMap
