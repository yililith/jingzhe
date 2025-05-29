<script setup lang="ts">

</script>

<template>
  <div class="jz-layout-content">
    <slot></slot>
  </div>
</template>

<style scoped>
.jz-layout-content {
  height: 100%;
  overflow-y: scroll;         /* 允许垂直滚动 */
  scrollbar-width: none;    /* Firefox 隐藏滚动条 */
  -ms-overflow-style: none; /* IE 10+ 隐藏滚动条 */
}

.jz-layout-content::-webkit-scrollbar {
  display: none;
}
</style>
