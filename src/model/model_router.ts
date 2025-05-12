import type { Component, VNode  } from 'vue'


export interface RouterModel {
  path: string
  name: string
  component?: () => Promise<Component>
  meta: {
    title: string
    icon?: VNode
    type: string
    grade: string
  }
  children?: RouterModel[]
}
