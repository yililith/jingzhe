import type { pieNDModel } from "@/model/model_option"


// 南丁格尔饼图
// @Param data: pieNDModel[]  数据 - 必传
// @Param radius: number[]   内外圈大小 - 选传
// @Param top: string   图例显示位置 - 选传
// @return Object
export const pieNDOptionObject = (data: pieNDModel[], radius?: number[], top?: string): Object => {
    return {
        legend: {
            top: top || 'bottom',
            textStyle: {
                textBorderWidth: 2,  // 描边宽度（像素）
                textBorderColor: '#fff', // 描边颜色（黑色）
            }
        },
        toolbox: {
            show: false,
        },
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: radius || [30, 120],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: data
            }
        ]
    }
}