<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { BreadcrumModel } from '@/model/model_menu.ts'
const route = useRoute()

const router = useRouter()

const breadcrumbList = ref<BreadcrumModel[]>([{path: '/dashboard', label: '主页'}])

const routeJump = (r: string) =>{  
  router.push(r)
}
// 监控路由变化
watch(
  () => route.path,
  () => {
    route.matched.forEach((item) => {
      breadcrumbList.value.push({
        path: item.path,
        label: item.meta.title as string
      })
    })
  },
  { immediate: true },
)
</script>

<template>
  <a-space align="baseline" size="mini">
    <template v-for="({ path, label }, index) of breadcrumbList" :key="index">
      <a-tag v-if="index === 0" color="rgb(255, 144, 71)" checkable :checked="true" @check="routeJump(path)">{{ label }}</a-tag>
      <a-tag v-else color="rgb(255, 144, 71)" closable checkable :checked="true" @check="routeJump(path)">{{ label }}</a-tag>
    </template>
  </a-space>
</template>

<style scoped>
</style>
