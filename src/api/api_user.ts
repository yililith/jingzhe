import type { ResModel } from "@/model/model_requests";
import type { loginModel, userListModel } from "@/model/model_user";
import req from "@/utils/utils_requests";

/**
 * 登录
 * @param username 
 * @param password 
 * @returns 
 */
export const api_login = (username: string, password: string) => {
    return req.post<ResModel<loginModel>>('/api/v1/user/login', {
        username,
        password
    },{
        headers: {
            'Content-Type': 'application/json',
        }
    }) as unknown as Promise<loginModel>;
}

/**
 *  分页获取用户列表
 * @param page 
 * @param pageSize 
 * @returns 
 */
export const api_getUserListForPage = (page: number, size: number) => {
    return req.get<ResModel<userListModel[]>>('/api/v1/user/getUserForPageSize', {
        params: {
            page,
            size
        }
    }) as unknown as Promise<userListModel[]>;
}