<script setup lang="ts">

import Layout_breadcrumb from '@/layout/components/layout_breadcrumb.vue'
</script>

<template>
  <a-layout>
<!--    侧边-->
    <a-layout-sider class="layout-sider">

    </a-layout-sider>
    <a-layout>
<!--      header-->
      <a-layout-header class="layout-header">

      </a-layout-header>
<!--      breadcrumb-->
      <layout_breadcrumb>

      </layout_breadcrumb>
<!--      content-->
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.layout-sider {
  height: 100vh;
  width: 200px;
  margin-right: 16px;
}
.layout-header {
  height: 64px;
}
</style>
