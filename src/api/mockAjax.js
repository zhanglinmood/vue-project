import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const service = axios.create({
    baseURL: '/mock', 
    timeout: 2000,
})

// 请求拦截器
service.interceptors.request.use(
    (config)=>{
        NProgress.start()
        return config
    },
    // ()=>{

    // }
);

// 响应拦截器
service.interceptors.response.use(
    (response)=>{
        NProgress.done() 
        return response.data
    },
    (error)=>{
        NProgress.done()
        alert('发送ajax请求失败' + error.message || '未知错误')

        // 后续处理错误
        // return Promise.reject(new Error('发送ajax请求失败'))
        // 后续不处理错误
        return new Promise(()=>{})
    }
)

export default service