<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { BreadcrumModel } from '@/model/model_menu.ts'
const route = useRoute()

const router = useRouter()

const breadcrumbList = ref<BreadcrumModel[]>([])

const routeJump = (r: string) =>{  
  router.push(r)
}
/**
 * 监控路由变化，生成面包屑标签
 */
watch(
  () => route.path,
  () => {    
    route.matched.filter(item => item.children.length === 0).filter(item => item.meta.title).filter(item => !breadcrumbList.value.find(breadcrumb => breadcrumb.label === item.meta.title)).forEach((item) => {
      breadcrumbList.value.push({
        path: item.path,
        label: item.meta.title as string
      })
    })
  },
  { immediate: true },
)

/**
 * 初始化面包屑标签
 */

onMounted(() => {
  breadcrumbList.value = [{path: '/dashboard', label: '主页'}]
})

/**
 * 提出被删除的breadcrumb
 * @param bread string
 */
const removeBreadcrumb = (label: string) => {
  breadcrumbList.value = breadcrumbList.value.filter(item => item.label !== label)
  
}
</script>

<template>
  <a-space align="baseline" size="mini">
    <template v-for="({ path, label }, index) of breadcrumbList" :key="label">
      <a-tag color="rgb(255, 144, 71)" :closable="index !== 0" checkable :checked="true" @check="routeJump(path)" @close="removeBreadcrumb(label)">{{ label }}</a-tag>
    </template>
  </a-space>
</template>

<style scoped>
</style>
