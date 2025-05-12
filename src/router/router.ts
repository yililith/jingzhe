import type { RouterModel } from '@/model/model_router.ts'
import { dashboardMap } from '@/router/menu_router/router_dashboard.ts'


const routerMap = new Map<string, RouterModel>()

dashboardMap.forEach((value, key) => {
  routerMap.set(key, value)
})

export default routerMap
