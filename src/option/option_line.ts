

/**
 * 折线图
 * @param xData 
 * @param yData 
 * @param smooth 
 * @returns Object
 */
export const lineOptionObject = (xData: string[], yData: number[], smooth?: boolean): Object => {
    return {
        xAxis: {
          type: 'category',
          data: xData,
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
              data: yData,
              type: 'line',
              smooth: smooth || true,
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
      }
}