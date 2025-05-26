import type { ResModel } from "@/model/model_requests";
import { storeToken } from "@/stores/store_token";
import axios, { type AxiosResponse } from "axios";


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
        const { code, data } = res.data
        if (code === 200) {
            return data
        }
    }
)