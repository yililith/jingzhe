<script setup lang="ts">
import {
  IconArrowRise
} from '@arco-design/web-vue/es/icon'

import JzEcharts from '@/components/jz_echarts.vue'
import { ref } from 'vue'


const options = ref({
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: 'rose 1'},
        { value: 38, name: 'rose 2'},
        { value: 32, name: 'rose 3'},
        { value: 30, name: 'rose 4'},
        { value: 28, name: 'rose 5'},
        { value: 26, name: 'rose 6'},
        { value: 22, name: 'rose 7'},
        { value: 18, name: 'rose 8'}
      ]
    }
  ]
})
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
                <jz-echarts :options="options" theme="dark"></jz-echarts>
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
