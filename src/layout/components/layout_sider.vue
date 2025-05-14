<script setup lang="ts">
import Logo from '@/assets/logo.svg'
import { ref } from 'vue'
import { storeMenu } from '@/stores/store_menu'
import { setMenus } from '@/utils'


// 菜单生成
const menuStore = storeMenu()
// 这个是从后端返回的，这里模拟一下
const menuNameList = setMenus(menuStore.menuList)



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
      <template v-for="item in menuNameList" :key="item.name">
        <a-sub-menu v-if="item.children">

        </a-sub-menu>
        <a-menu-item v-else>

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
