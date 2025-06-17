import type { VNode } from 'vue'


export interface MenuModel {
  name: string
  path: string
  icon?: VNode
  children?: MenuModel[]
}

export interface menuListModel {
  name: string
  type: string
  level: 1 | 2
}


export interface BreadcrumModel {
  path: string,
  label: string
}
