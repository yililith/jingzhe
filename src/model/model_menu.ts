import type { VNode } from 'vue'


export interface MenuModel {
  name: string
  path: string
  icon: VNode
  children?: MenuModel[]
}


