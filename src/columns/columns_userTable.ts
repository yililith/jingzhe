import type { columnsModel } from "@/model/model_columns"

import { h } from 'vue'
import { Avatar } from '@arco-design/web-vue'

/**
 * 用户表格列配置
 * @returns  {columnsModel[]}
 */
export const userTableColumns = (): columnsModel[] => {
    return [
        {
            title: 'index',
            dataIndex: 'index',
            fixed: 'left'
        },
        {
            title: '用户名',
            dataIndex: 'username'
        },
        {
            title: '昵称',
            dataIndex: 'nickname'
        },
        {
            title: '头像',
            dataIndex: 'image_url',
            render: ({ record }) => {
                return h(Avatar, {
                    imageUrl: record.image_url,
                    size: 40,
                    shape: 'square'
                })
            }
        },
        {
            title: '状态',
            dataIndex: 'status'
        },
        {
            title: '操作',
            dataIndex: 'action',
            fixed: 'center',
        }
    ]
}