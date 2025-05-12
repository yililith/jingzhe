<script setup lang="ts">
import Logo from '@/assets/logo.svg'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()

// 这个是从后端返回的，这里模拟一下
const menuNameList = ref<string[]>(["dashboard"])



</script>

<template>
  <div>
    <div class="sider-header">
      <a-avatar size="64" shape="square" style="background-color: transparent" >
        <img :src="Logo">
      </a-avatar>
    </div>
    <a-menu
      :accordion="true"
    >
      <template v-for="item in router.getRoutes()" :key="item.name">
        <a-sub-menu v-if="item.children">

        </a-sub-menu>
        <a-menu-item v-else></a-menu-item>
      </template>
    </a-menu>
  </div>

</template>

<style scoped>
.sider-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
}
</style>
