<script setup lang="ts">

</script>
<template>
  <a-card class="comp-content">
    <slot>

    </slot>
  </a-card>
</template>
<style scoped lang='scss'>
.comp-content {
  height: calc(100% - 10px);
  width: calc(100% - 6px);
  border-radius: 10px;
  overflow-y: scroll;         /* 允许垂直滚动 */
  scrollbar-width: none;    /* Firefox 隐藏滚动条 */
  -ms-overflow-style: none; /* IE 10+ 隐藏滚动条 */
}

.comp-content::-webkit-scrollbar {
  display: none;
}
</style>
