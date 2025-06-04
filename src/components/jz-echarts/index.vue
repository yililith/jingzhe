<script setup>
import * as echarts from 'echarts'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
  chartOption: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const chartRef = ref(null)
let echartInstance = null
let resizeObserver = null

// 防抖优化
const debounceResize = (fn, delay = 100) => {
  let timer = null
  return () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(fn, delay)
  }
}

const resizeHandler = debounceResize(() => {
  if (echartInstance) {
    echartInstance.resize({ animation: { duration: 300 } })
  }
})

const initChart = () => {
  if (!chartRef.value) return

  // 确保容器有实际尺寸（避免 SSR/初始化时宽度为 0）
  if (chartRef.value.clientWidth === 0 || chartRef.value.clientHeight === 0) {
    setTimeout(initChart, 50)
    return
  }

  if (!echartInstance) {
    echartInstance = echarts.init(chartRef.value)
  }
  updateChart()
}

const updateChart = () => {
  if (echartInstance) {
    echartInstance.setOption(props.chartOption, { notMerge: true })
  }
}

onMounted(() => {
  initChart()

  // 优先使用 ResizeObserver 监听容器变化
  if (typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(resizeHandler)
    resizeObserver.observe(chartRef.value)
  } else {
    // 回退方案：监听窗口变化
    window.addEventListener('resize', resizeHandler)
  }
})

onUnmounted(() => {
  if (resizeObserver) resizeObserver.disconnect()
  window.removeEventListener('resize', resizeHandler)
  if (echartInstance) echartInstance.dispose()
})

// 监听数据变化
watch(() => props.chartOption, updateChart, { deep: true })
</script>

<template>
  <div ref="chartRef" class="jz-echarts-container" />
</template>

<style scoped>
.jz-echarts-container {
  width: 100%;
  height: 100%;
  min-height: 350px; /* 防止初始化高度为 0 */
}
</style>