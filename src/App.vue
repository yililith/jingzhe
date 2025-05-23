<script setup lang="ts">
</script>

<template>
  <div class="body-app">
    <RouterView />
  </div>
</template>

<style scoped>
body[arco-theme='dark'] .body-app {
  background-color: rgb(45, 45, 45);
  color: rgb(189, 189, 190);
}
body:not([arco-theme='dark']) .body-app {
  background-color: rgb(245, 245, 245);
}
</style>
