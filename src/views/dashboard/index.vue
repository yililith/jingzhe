<script setup lang="ts">
import {
  IconArrowRise
} from '@arco-design/web-vue/es/icon'
// import JzEcharts from '@/components/jz-echarts/index.vue';
import { ref } from 'vue'

const pieOption = ref<Object>({
    legend: {
        top: 'bottom',
        textStyle: {
            textBorderWidth: 2,  // 描边宽度（像素）
            textBorderColor: '#fff', // 描边颜色（黑色）
        }
    },
    toolbox: {
        show: false,
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
        radius: [30, 120],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
            borderRadius: 8
        },
        animationDuration: 5000, // 单独控制该系列动画时长
        animationEasing: 'quadraticOut', // 缓动效果
        data: [
            { value: 40, name: 'Go' },
            { value: 38, name: 'Java' },
            { value: 32, name: 'Python' },
            { value: 30, name: 'C/C++' },
            { value: 28, name: 'TypeScript' },
            { value: 26, name: 'JavaScript' },
            { value: 22, name: 'Rust' },
            { value: 18, name: 'C#' }
        ]
        }
    ]
})

const category = ref<Object>({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLine: {
      lineStyle: {
        color: '#999' // X轴颜色
      }
    },
    axisTick: {
      alignWithLabel: true
    }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false, // 显示Y轴横向网格线
      lineStyle: {
        type: 'dashed', // 设置为虚线
        color: '#eee' // 浅色虚线
      }
    },
    axisLine: {
      show: true, // 显示Y轴线
      lineStyle: {
        color: '#999' // Y轴颜色
      }
    }
  },
  series: [
    {
        animationDuration: 5000, // 单独控制该系列动画时长
        animationEasing: 'quadraticOut', // 缓动效果
        data: [100, 500, 1000, 200, 400, 2000, 1320],
        type: 'line',
        smooth: true,
        lineStyle: {
            width: 3,
            color: '#5470C6' // 折线颜色
        },
        itemStyle: {
            color: '#5470C6' // 数据点颜色
        }
    }
  ],
  // 十字线配置
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross', // 十字指示器
      label: {
        backgroundColor: '#6a7985' // 十字线标签背景色
      },
      crossStyle: {
        color: '#999' // 十字线颜色
      }
    }
  },
  // 移除背景网格线（X轴方向）
  grid: {
    show: false,
    borderWidth: 0
  }
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
                <JzEcharts :chartOption="category"></JzEcharts>
            </a-card>
        </a-col>
        <a-col :xs="24" :sm="12">
            <a-card class="jz-dashboard-card">
                <JzEcharts :chartOption="category"></JzEcharts>
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
