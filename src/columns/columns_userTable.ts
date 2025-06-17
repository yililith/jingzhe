import type { columnsModel } from "@/model/model_columns"




export const userTableColumns = (): columnsModel[] => {
    return [
        {
            title: 'ID',
            dataIndex: 'id',
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
            title: '创建时间',
            dataIndex: 'createTime'
        },
        {
            title: '操作',
            dataIndex: 'action',
            fixed: 'right'
        }
    ]
}