import type { VNode } from 'vue'


export interface MenuModel {
  name: string
  path: string
  icon?: VNode
  children?: MenuModel[]
}

export interface AcceptMenuModel {
  name: string
  type: string
  level: string
}


export interface BreadcrumModel {
  path: string,
  label: string
}
