<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { BreadcrumModel } from '@/model/model_menu.ts'
const route = useRoute()

const breadcrumbList = ref<BreadcrumModel[]>([])

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
  <a-breadcrumb :routes="breadcrumbList">
    <template #item-render="{ route, paths }">
      <a-link :href="paths.join('/')">
        {{ route.label }}
      </a-link>
    </template>
  </a-breadcrumb>
</template>

<style scoped>
</style>
