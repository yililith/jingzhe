<script setup lang="ts">

import layout_breadcrumb from '@/layout/components/layout_breadcrumb.vue'
import layout_sider from '@/layout/components/layout_sider.vue'
import layout_header from './components/layout_header.vue';
import layout_content from './components/layout_content.vue';
</script>

<template>
  <a-layout class="layout">
<!--    侧边-->
    <a-layout-sider
      class="layout-sider"
      :breakpoint="'sm'"
      collapsible
    >
      <!-- 侧边栏 -->
      <layout_sider />
    </a-layout-sider>
    <a-layout class="layout-right">
      <!-- 顶部栏 -->
      <a-layout-header class="layout-header">
        <layout_header />
      </a-layout-header>
      <!-- 面包屑 -->
      <layout_breadcrumb />
      <!-- 内容区 -->
      <a-layout-content class="layout-content">
        <layout_content>
          <RouterView />
        </layout_content>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.layout {
  height: 100vh;
  overflow: hidden;
}
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
  padding: 0 8px 0 0;
  height: calc(100vh - 120px);
}
body[arco-theme='dark'] .layout-header {
  background-color: rgb(35, 35, 36);
  box-shadow: 2px 1px 2px 1px rgba(255, 255, 255, 0.08)
}

body:not([arco-theme='dark']) .layout-header {
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.08)
}
</style>
