<script setup lang="ts">
import {
  IconArrowRise
} from '@arco-design/web-vue/es/icon'

import { ref } from 'vue'
</script>

<template>
    <a-row :gutter="[8,8]">
        <a-col :xs="12" :sm="6">
            <a-card title="New Users">
                <a-statistic :value="125670" show-group-separator >
                    <template #suffix>
                        <icon-arrow-rise />
                    </template>
                </a-statistic>
            </a-card>
        </a-col>
        <a-col :xs="12" :sm="6">
            <a-card title="User Growth Rate">
                <a-statistic :value="50.52" :precision="2" :value-style="{ color: '#0fbf60' }">
                    <template #prefix>
                        <icon-arrow-rise />
                    </template>
                    <template #suffix>%</template>
                </a-statistic>
            </a-card>
        </a-col>
        <a-col :xs="12" :sm="6">
            <a-card  title="New Orders">
                <a-statistic :value="12567000" show-group-separator >
                    <template #suffix>
                        <icon-arrow-rise />
                    </template>
                </a-statistic>
            </a-card>
        </a-col>
        <a-col :xs="12" :sm="6">
            <a-card title="Order Growth Rate">
                <a-statistic :value="50.52" :precision="2" :value-style="{ color: '#0fbf60' }">
                    <template #prefix>
                        <icon-arrow-rise />
                    </template>
                    <template #suffix>%</template>
                </a-statistic>
            </a-card>
        </a-col>
        <a-col :xs="24" :sm="12">
            <a-card class="jz-dashboard-card">
                
            </a-card>
        </a-col>
        <a-col :xs="24" :sm="12">
            <a-card class="jz-dashboard-card">
                订单分类
            </a-card>
        </a-col>
        <a-col :xs="24" :sm="12">
            <a-card class="jz-dashboard-card">
                用户增长曲线
            </a-card>
        </a-col>
        <a-col :xs="24" :sm="12">
            <a-card class="jz-dashboard-card">
                订单增长曲线
            </a-card>
        </a-col>
    </a-row>
</template>

<style lang="scss" scoped>
.jz-dashboard-card {
    width: 100%;
    height: 400px;
}
</style>
