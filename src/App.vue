<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.body.setAttribute('arco-theme', 'dark')
})
</script>

<template>
  <a-config-provider :theme="{ theme: 'dark' }">
    <RouterView />
  </a-config-provider>
</template>

<style scoped>

</style>
