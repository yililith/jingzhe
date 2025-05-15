<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { RouterModel } from '@/model/model_router.ts'
import { IconHome } from '@arco-design/web-vue/es/icon'
const route = useRoute()

const router = useRouter();
const breadcrumbList = ref([])

const routeJump = (route: string) =>{
  router.push(route)
}

watch(
  () => route.path,
  () => {
    breadcrumbList.value = route.matched
      .filter((item) => item.meta && item.meta.title)
      .map(item => item)
  },
  { immediate: true },
)
</script>

<template>
  <a-breadcrumb>
    <a-space direction="vertical">
      <a-breadcrumb-item>
        <IconHome />
      </a-breadcrumb-item>
      <a-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index" @click="routeJump(item.path)">
        {{ item.meta.title }}
      </a-breadcrumb-item>
    </a-space>
  </a-breadcrumb>
</template>

<style scoped></style>
