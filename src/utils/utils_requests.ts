import { storeToken } from "@/stores/store_token";
import axios, { type AxiosResponse } from "axios";
import { Message } from '@arco-design/web-vue'
import router from "@/router";
import { storeMenu } from "@/stores/store_menu";
import type { ResModel } from "@/model/model_requests";

const baseURL = import.meta.env.VITE_APP_API_URL

const req = axios.create({
    baseURL,
    timeout: 5000,
})

req.interceptors.request.use(
    (config) => {
        const tokenStore = storeToken()
        if (tokenStore.token) {
            config.headers.Authorization = tokenStore.token
        }
        return config
    },
    (error) => Promise.reject(error)
)

req.interceptors.response.use(
    (res: AxiosResponse<ResModel>) => {
        const { code, data, message } = res.data;
        
        switch (code) {
            case 200:
                return data
            case 400:
                Message.error(message || 'Bad request')
                return Promise.reject(data)
            case 401:
                Message.error(message || 'Token expired, please login again')
                const tokenStore = storeToken()
                const menuStore = storeMenu()
                tokenStore.removeToken()
                tokenStore.removeUserInfo()
                menuStore.removeMenu()
                router.push('/login')
                return Promise.reject(data)
            case 404:
                Message.error(message || 'Resource not found')
                return Promise.reject(data)
            case 500:
                Message.error(message || 'Internal server error')
                return Promise.reject(data)
            default:
                return Promise.reject(data)
        }
    },
    (err) => {
        Message.error(err.message || 'Network error')
        return Promise.reject(err)
    }
)

export default req