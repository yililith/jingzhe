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
}

.comp-content::-webkit-scrollbar {
  display: none;
}
</style>
