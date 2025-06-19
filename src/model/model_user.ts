/**
 * 登录数据模型
 */
export interface loginModel {
    image: string
    nickname: string
    token?: string
    uid: string
}

/**
 * 用户列表数据模型
 */
export interface userListModel {
    total: number
    list: {
        image_id: string
        image_url: string
        nickname: string
        status: number
        uid: string
        username: string
    }
}