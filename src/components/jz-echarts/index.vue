<script setup>
// 导入 ECharts 库
import * as echarts from 'echarts'
// 导入 Vue 相关 API
import { onMounted, onUnmounted, ref, watch } from 'vue'

// 定义组件 props
const props = defineProps({
  chartOption: {
    type: Object,       // 类型为对象
    required: true,     // 必传参数
    default: () => ({}), // 默认值为空对象
  },
})

// 定义模板引用
const chartRef = ref(null)
// 存储 ECharts 实例
let echartInstance = null
// 存储 ResizeObserver 实例
let resizeObserver = null

// 防抖优化函数
const debounceResize = (fn, delay = 100) => {
  let timer = null
  return () => {
    if (timer) clearTimeout(timer)  // 清除之前的定时器
    timer = setTimeout(fn, delay)  // 设置新的定时器
  }
}

// 使用防抖处理的重置大小函数
const resizeHandler = debounceResize(() => {
  if (echartInstance) {
    // 调用 ECharts 实例的 resize 方法，带有动画效果
    echartInstance.resize({ animation: { duration: 300 } })
  }
})

// 初始化图表函数
const initChart = () => {
  // 如果容器引用不存在则返回
  if (!chartRef.value) return

  // 检查容器是否有实际尺寸（避免 SSR/初始化时宽度为 0）
  if (chartRef.value.clientWidth === 0 || chartRef.value.clientHeight === 0) {
    // 延迟重试
    setTimeout(initChart, 50)
    return
  }

  // 如果 ECharts 实例不存在则初始化
  if (!echartInstance) {
    echartInstance = echarts.init(chartRef.value)
  }
  // 更新图表
  updateChart()
}

// 更新图表函数
const updateChart = () => {
  if (echartInstance) {
    // 设置图表选项，notMerge: true 表示不合并选项
    echartInstance.setOption(props.chartOption, { notMerge: true })
  }
}

// 组件挂载钩子
onMounted(() => {
  // 初始化图表
  initChart()

  // 优先使用 ResizeObserver 监听容器变化
  if (typeof ResizeObserver !== 'undefined') {
    // 创建 ResizeObserver 实例并观察容器
    resizeObserver = new ResizeObserver(resizeHandler)
    resizeObserver.observe(chartRef.value)
  } else {
    // 回退方案：监听窗口变化
    window.addEventListener('resize', resizeHandler)
  }
})

// 组件卸载钩子
onUnmounted(() => {
  // 断开 ResizeObserver 观察
  if (resizeObserver) resizeObserver.disconnect()
  // 移除窗口 resize 事件监听
  window.removeEventListener('resize', resizeHandler)
  // 销毁 ECharts 实例
  if (echartInstance) echartInstance.dispose()
})

// 监听 chartOption 变化
watch(() => props.chartOption, updateChart, { deep: true })
</script>

<template>
  <!-- 图表容器 -->
  <div ref="chartRef" class="jz-echarts-container" />
</template>

<style scoped>
/* 图表容器样式 */
.jz-echarts-container {
  width: 100%;          /* 宽度 100% */
  height: 100%;         /* 高度 100% */
  min-height: 350px;    /* 最小高度，防止初始化高度为 0 */
}
</style>