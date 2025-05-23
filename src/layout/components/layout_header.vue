<script setup lang="ts">
import { ref, watch } from 'vue';
import {
  IconMoon,
  IconSun
} from '@arco-design/web-vue/es/icon'

import { onMounted } from 'vue';

const isDark = ref<boolean>(true)
const changeIsDark = (newIsDark: boolean) => {
  isDark.value = newIsDark
}

onMounted(() => {
  if (isDark.value) {
    document.body.setAttribute('arco-theme', 'dark');
  } else {
    document.body.removeAttribute('arco-theme');
  }
})

watch(isDark, () => {
  if (isDark.value) {
    document.body.setAttribute('arco-theme', 'dark');
  } else {
    document.body.removeAttribute('arco-theme');
  }
})
</script>

<template>
  <div class="header-body">
    <div>
      T
    </div>
    <div @click="changeIsDark(!isDark)">
      <icon-moon v-if="isDark" :size="32" />
      <icon-sun v-else :size="32" />
    </div>
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
