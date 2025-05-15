<script setup lang="ts">
import Logo from '@/assets/logo.svg'
import { storeMenu } from '@/stores/store_menu'
import { setMenus } from '@/utils'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
// 菜单生成
const menuStore = storeMenu()
//
const menuNameList = setMenus(menuStore.menuList)

// 路由跳转
const routeJump = (route: string) =>{
  router.push(route)
}

</script>

<template>
  <div>
    <div class="sider-header">
      <a-avatar :size="64" shape="square" style="background-color: transparent">
        <img :src="Logo" />
      </a-avatar>
    </div>
    <!--  菜单组件  -->
    <a-menu :accordion="true">
      <template v-for="item in menuNameList" :key="item.name">
        <a-sub-menu v-if="item.children">
          <template #icon><component :is="item.icon"></component></template>
          <template #title>{{ item.name }}</template>
          <a-menu-item v-for="child in item.children" :key="child.name" @click="routeJump(item.path)">
            {{ child.name }}
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else @click="routeJump(item.path)">
          <template #icon><component :is="item.icon"></component></template>
          {{ item.name }}
        </a-menu-item>
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
