<script setup lang="ts">
import type { pieNDModel } from '@/model/model_option'
import { lineOptionObject } from '@/option/option_line'
import { pieNDOptionObject } from '@/option/option_pie'
import {
  IconArrowRise
} from '@arco-design/web-vue/es/icon'
// import JzEcharts from '@/components/jz-echarts/index.vue';
import { ref } from 'vue'
const pieOptionData = ref<pieNDModel[]>(
  [
    { value: 40, name: 'Go' },
    { value: 38, name: 'Java' },
    { value: 32, name: 'Python' },
    { value: 30, name: 'C/C++' },
    { value: 28, name: 'TypeScript' },
    { value: 26, name: 'JavaScript' },
    { value: 22, name: 'Rust' },
    { value: 18, name: 'C#' }
  ]
)
const pieOption = pieNDOptionObject(pieOptionData.value)


const xCategoryData = ref<string[]>(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])

const yCategoryData = ref<number[]>([100, 500, 1000, 200, 400, 2000, 1320])

const categoryOption = lineOptionObject(xCategoryData.value, yCategoryData.value)
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
        <a-col :xs="24" :sm="8">
            <a-card class="jz-dashboard-card">
                <JzEcharts :chartOption="pieOption"></JzEcharts>
            </a-card>
        </a-col>
        <a-col :xs="24" :sm="8">
            <a-card class="jz-dashboard-card">
                <JzEcharts :chartOption="pieOption"></JzEcharts>
            </a-card>
        </a-col>
        <a-col :xs="24" :sm="8">
            <a-card class="jz-dashboard-card">
                <JzEcharts :chartOption="pieOption"></JzEcharts>
            </a-card>
        </a-col>
        <a-col :xs="24" :sm="12">
            <a-card class="jz-dashboard-card">
                <JzEcharts :chartOption="categoryOption"></JzEcharts>
            </a-card>
        </a-col>
        <a-col :xs="24" :sm="12">
            <a-card class="jz-dashboard-card">
                <JzEcharts :chartOption="categoryOption"></JzEcharts>
            </a-card>
        </a-col>
    </a-row>
</template>

<style lang="scss" scoped>
/* 关键样式：确保卡片和图表容器正确填充 */
.dashboard-card {
  width: 100%;
  height: 400px; /* 固定高度 */
}

/* 响应式调整 */
@media (max-width: 992px) {
  .dashboard-card {
    height: 350px;
  }
}
</style>
