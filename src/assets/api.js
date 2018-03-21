import axios from 'axios'
import qs from 'qs'
import NProgress from 'nprogress'

axios.interceptors.request.use(config => {
    NProgress.start()
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))

function checkStatus(response) {
    console.log(response)
    NProgress.done()
    if (response.status === 200 || response.status === 304) {
        return response
    }
   
    return {
        data: {
            code: -404,
            message: response.statusText,
            data: response.statusText,
        }
    }
}

function checkCode(res) {
    console.log(vuemodel)
    if (res.data.code !== 200) {
        this.$message({
            showClose: true,
            message: '恭喜你，这是一条成功消息',
            type: 'success'
          });
        //alert(res.data.message)
    }
    return res
}

export default {
    post(url, data) {
        return axios({
            method: 'post',
            url:"http://clue.api.test"+url,
            data: qs.stringify(data),
            timeout: 30000,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(checkStatus).then(checkCode)
    },
    get(url, params) {
        return axios({
            method: 'get',
            url:"http://clue.api.test"+url,
            params,
            timeout: 30000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(checkStatus).then(checkCode)
    }
}