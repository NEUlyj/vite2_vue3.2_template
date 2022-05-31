import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: 5000
})
instance.interceptors.request.use(config => {
    return config   //设置请求头
}, error => {
    return Promise.reject(error)
})
instance.interceptors.response.use(response => {
    if (response.data.code == 200) {
        return response.data
    } else {
        new Error('数据请求失败')
    }
}, error => {
    return Promise.reject(error)
})

export default instance
