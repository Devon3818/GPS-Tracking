import axios from 'axios'
import store from '@/store'

var service = axios.create({
    baseURL: 'http://shunfengche.qishare.cn/windmillsteward',
    timeout: 5000
});

service.interceptors.request.use(config => {
    
    if (store.getters.token) {
        // 让每个请求携带token-- ['access_token']为自定义key 请根据实际情况自行修改
        //config.headers['user_id'] = 'Bearer' + ' '  +getToken()
    }

    config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

    return config
},error => {
    console.log(error) // for debug
    Promise.reject(error)
});

export default service