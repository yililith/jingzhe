<script setup lang="ts">
import Logo from '@/assets/logo.svg'
import type { MenuModel } from '@/model/model_menu'
import { storeMenu } from '@/stores/store_menu'
import { setMenus } from '@/utils/utils_menus'
import { log } from 'echarts/types/src/util/log.js'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()

const router = useRouter()
// 菜单生成
const menuStore = storeMenu()
//
const menuNameList = setMenus(menuStore.menuList)

const selectKeys = ref<string[]>([])

const openKeys = ref<string[]>([])
// 路由跳转 and 添加被选中的菜单key
const routeJump = (item: MenuModel) =>{  
  selectKeys.value = [item.name]
  router.push(item.path)
}

/**
 * 监听路由变化,并添加展开菜单的key
 */
watch(
  () => route.path,
  () => {
    selectKeys.value = [route.meta.title as string]
    
    if (route.meta.grade === 'one') {
      openKeys.value= []
    }
    
    if (route.meta.grade === 'two') {
      openKeys.value= [route.matched[1].meta.title as string]
    }
  },
  { immediate: true },
)

</script>

<template>
  <div>
    <div class="sider-header">
      <a-avatar :size="64" shape="square" style="background-color: transparent">
        <img :src="Logo" />
      </a-avatar>
    </div>
    <!--  菜单组件  -->
    <a-menu :accordion="true" v-model:selected-keys="selectKeys" v-model:open-keys="openKeys" :default-selected-keys="['主页']">
      <template v-for="item in menuNameList" :key="item.name">
        <a-sub-menu v-if="item.children" :key="item.name">
          <template #icon><component :is="item.icon"></component></template>
          <template #title>{{ item.name }}</template>
          <a-menu-item v-for="child in item.children" :key="child.name" @click="routeJump(child)">
            {{ child.name }}
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else @click="routeJump(item)" :key="item.name!">
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
