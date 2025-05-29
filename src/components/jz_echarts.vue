<script setup lang="ts">
import { ref, onMounted, watch, onBeforeUnmount, defineProps } from 'vue';

import * as echarts from 'echarts'

const props = defineProps({
  options: {
    type: Object,
    required: true
  },
  theme: {
    type: String,
    default: null
  },
  autoResize: {
    type: Boolean,
    default: true
  }
})

const chartRef = ref(null)

let chartInstance = null

const initChart = () => {
  if (!chartRef.value) return

  chartInstance = echarts.init(chartRef.value, props.theme, { renderer: 'svg' })
  chartInstance.setOption(props.options)

  if (props.autoResize) {
    window.addEventListener('resize', resizeChart)
  }
}

const resizeChart = () => {
  if (chartInstance) {
    chartInstance.resize()
  }
}

watch(
  () => props.options,
  (newOptions) => {
    if (chartInstance) {
      chartInstance.setOption(newOptions, true)
    }
  },
  { deep: true }
)

onMounted(() => {
  initChart()
})

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.dispose()
    chartInstance = null
  }
  window.removeEventListener('resize', resizeChart)
})
</script>
<template>
  <div ref="chartRef" class="echart-container">

  </div>
</template>
<style scoped lang='scss'>
.echart-container {
  width: 100%;
  height: 100%;
}
</style>
