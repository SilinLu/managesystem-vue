// 组件功能：负责统一导出一个配置后的 axios
// 1.导入 axios 模块
import axios from 'axios'
// 2 .配置 axios 模块
// 2.1. 配置基地址
// 2.2 设置请求拦截器
// 请求在到达服务器之前，先会调用use中的这个回调函数来添加请求头信息
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.responseType = 'json'
axios.defaults.transformRequest = [function (data) {
    let ret = ''
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
}]
axios.interceptors.request.use(config => {
    //为请求头对象，添加token验证的Authorization字段
    config.headers.Authorization = window.sessionStorage.getItem("token")
    return config
})

// 3.导出 axios 模块方法
export default axios
