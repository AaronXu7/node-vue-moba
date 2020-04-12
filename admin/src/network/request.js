import axios from 'axios'
import Vue from 'vue'
import router from '../router'

const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL || '/admin/api',
    timeout:5000
})

// 请求拦截
http.interceptors.request.use(config =>{
        if(localStorage.token){
            config.headers.Authorization = 'Bearer ' + (localStorage.token || '')
        }
        return config
    },err => {
        return Promise.reject(err)
    }
)

// 响应拦截
http.interceptors.response.use(res => {
        return res
    },err => {
        if(err.response.data.message){
            Vue.prototype.$message({
                type: 'error',
                message: err.response.data.message
            })
        }

        if(err.response.status === 401){
            router.push('/login')
        }

        return Promise.reject(err)
    }
)

export default http