<script setup lang="ts">

import Layout_breadcrumb from '@/layout/components/layout_breadcrumb.vue'
import Layout_sider from '@/layout/components/layout_sider.vue'
import layout_header from './components/layout_header.vue';
</script>

<template>
  <a-layout class="layout">
<!--    侧边-->
    <a-layout-sider
      class="layout-sider"
      :breakpoint="'sm'"
    >
      <layout_sider></layout_sider>
    </a-layout-sider>
    <a-layout>
<!--      header-->
      <!-- <a-layout-header class="layout-header">
        <layout-header></layout-header>
      </a-layout-header> -->
<!--      breadcrumb-->
      <a-layout-header class="layout-header">
        <layout_header>

        </layout_header>
      </a-layout-header>
      <layout_breadcrumb>

      </layout_breadcrumb>
<!--      content-->
      <a-layout-content class="layout-content">
        <RouterView />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.layout-sider {
  height: 100vh;
  margin-right: 6px;
  font-weight: bold;
}
.layout-header {
  height: 64px;
  margin-bottom: 16px;
  box-sizing: border-box;
  padding: 0;
}
.layout-content {
  margin-top: 16px;
}

body[arco-theme='dark'] .layout-header {
  background-color: rgb(35, 35, 36);
}

body:not([arco-theme='dark']) .layout-header {
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.08)
}
</style>
