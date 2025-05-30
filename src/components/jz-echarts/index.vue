<script setup>
import * as echarts from 'echarts'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
    chartStyle: {
        type: Object,
        default: () => ({
            width: '600px',
            height: '400px'
        })
    },
    chartOption: {
        type: Object,
        required: true,
        default: () => ({})
    }
})

const chartRef = ref(null)
let echartInstance = null

const resizeHandler = () => {
    if (echartInstance) {
        echartInstance.resize({
            animation: { duration: 300 }
        })
    }
}

const drawChart = () => {
    if (!chartRef.value) return

    if (!echartInstance) {
        echartInstance = echarts.init(chartRef.value)
    }
    echartInstance.setOption(props.chartOption, {
        notMerge: true
    })
}

onMounted(() => {
    drawChart()
    window.addEventListener('resize', resizeHandler)
})

// 清除事件监听和图表实例
onUnmounted(() => {
    window.removeEventListener('resize', resizeHandler)
    if (echartInstance) {
        echartInstance.dispose()
        echartInstance = null
    }
})

// 监听配置变化，动态更新图表
watch(() => props.chartOption, () => {
    drawChart()
}, { deep: true })
</script>

<template>
    <div :style="chartStyle" ref="chartRef"></div>
</template>

<style scoped lang='scss'>
</style>
