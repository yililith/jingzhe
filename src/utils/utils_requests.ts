import type { ResModel } from "@/model/model_requests";
import { storeToken } from "@/stores/store_token";
import axios, { type AxiosResponse } from "axios";
import { Message } from '@arco-design/web-vue'

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
    (res: AxiosResponse<ResModel<any>>) => {
        const { code, data, message } = res.data
        switch (code) {
            case 200:
                return data
            case 403:
                Message.warning('Forbidden')
                break
            case 404:
                Message.error('404 Not Found')
                break
            case 500:
                Message.error('Internal Server Error')
                break
            default:
                Message.warning(message)
                break
        }
    },
    (err) => {
        Message.error(err.message || 'Network error')
        return Promise.reject(err)
    }
)

export default req