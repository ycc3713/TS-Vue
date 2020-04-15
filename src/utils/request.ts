import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import { getToken } from './auth'

// 创建axios实例
let request = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 5000 // 请求超时时间
})

// 请求拦截. 在发送请求前，加上token  
request.interceptors.request.use(config => {
    if (store.getters.token) {
        config.headers.Authorization = `Bearer ${getToken()}`
    }
    return config
}, error => {
    Promise.reject(error)
})