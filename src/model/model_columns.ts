export interface columnsModel {
    title: string,
    dataIndex: string,
    fixed?: 'left' | 'center' | 'right'
    render?: (params: { record: any, index?: number }) => any
}