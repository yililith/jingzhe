import type { ResModel } from "@/model/model_requests";
import type { loginModel } from "@/model/model_user";
import req from "@/utils/utils_requests";


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