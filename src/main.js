// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from "./assets/api"

import ElementUI from 'element-ui'
import Vuex from 'vuex'
import axios from 'axios'
import publicnav from './components/publicnav'
import menuslider from './components/menu'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/loader-style.css'
import './assets/css/bootstrap.css'
import './assets/css/signin.css'
import './assets/css/style.css'


Vue.config.productionTip = false;

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    userToken: ''
  }
})
Vue.use(ElementUI);
// axios.defaults.baseURL = 'http://clue.api.test';
// axios.defaults.headers.common['Authorization'] = "aaa";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const $axios = axios.create({
  baseURL: 'http://clue.api.test',
  timeout: 5000,
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理
    console.log(data)
    return JSON.stringify(data);
  }],
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理
    console.log(data)
    if(!JSON.parse(data).success){
      console.log("错误")
      Vue.prototype.$message({
        showClose: true,
        message: error,
        type: 'error'
      })
    }else{
      return JSON.parse(data).data;
    }
    
  }],
});
//axios.defaults.headers = {'X-Requested-With': 'XMLHttpRequest'};
Vue.prototype.$ajax = $axios

//Vue.prototype.$ajax = axios
Vue.component('public-nav', publicnav);
Vue.component('menuslider', menuslider);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, publicnav, menuslider },
  template: '<App/>'
})
