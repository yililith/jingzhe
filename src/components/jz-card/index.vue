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
  height: 99.5%;
  width: 100%;
  border-radius: 10px;
}

.comp-content::-webkit-scrollbar {
  display: none;
}
</style>
