<script setup lang="ts">

import Layout_breadcrumb from '@/layout/components/layout_breadcrumb.vue'
import Layout_sider from '@/layout/components/layout_sider.vue'
</script>

<template>
  <a-layout>
<!--    侧边-->
    <a-layout-sider class="layout-sider">
      <layout_sider></layout_sider>
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
