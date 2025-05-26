<script setup lang="ts">
import { ref, watch } from 'vue';
import {
  IconMoon,
  IconSun,
  IconExport
} from '@arco-design/web-vue/es/icon'

import { onMounted } from 'vue';
import { storeMenu } from '@/stores/store_menu';
import { storeRouter } from '@/stores/store_router';
import { storeToken } from '@/stores/store_token';
import { useRouter } from 'vue-router';

// 主题切换, 默认 黑
const isDark = ref<boolean>(true)
const changeIsDark = (newIsDark: boolean) => {
  isDark.value = newIsDark
}
// 初始化主题
onMounted(() => {
  if (isDark.value) {
    document.body.setAttribute('arco-theme', 'dark');
  }
})
// 切换主题
watch(isDark, () => {
  if (isDark.value) {
    document.body.setAttribute('arco-theme', 'dark');
  } else {
    document.body.removeAttribute('arco-theme');
  }
})

// 退出登录
const menuStore = storeMenu()
const routerStore = storeRouter()
const tokenStore = storeToken()
const router = useRouter()

const logOut = () => {
  menuStore.removeMenu()
  routerStore.changeIsAddRouter(false)
  tokenStore.removeToken()
  router.push("/login")
}
</script>

<template>
  <div class="header-body">
    <div>
    </div>
    <a-space size="large">
      <div @click="changeIsDark(!isDark)">
        <icon-moon v-if="isDark" :size="18" />
        <icon-sun v-else :size="18" />
      </div>
      <div>
        <a-dropdown>
          <a-avatar shape="square">U</a-avatar>
          <template #content>
            <a-doption @click="logOut">
              <template #icon>
                <icon-export />
              </template>
              <template #default>
                退出登录
              </template>
            </a-doption>
          </template>
        </a-dropdown>
      </div>
    </a-space>
  </div>
</template>

<style scoped>
.header-body {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 0 16px;
  box-sizing: border-box;
}
</style>
