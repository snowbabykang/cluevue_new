// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from "./assets/api"
import config from "./assets/config"
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import axios from 'axios'
import echarts from 'echarts'
import publicnav from './components/publicnav'
import menuslider from './components/menu'
import publicsearch from './components/publicsearch'
import breadcrumb from './components/breadcrumb'
import utils from './utils'


import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/loader-style.css'
import './assets/css/signin.css'
import './assets/css/style.css'
import './assets/css/bootstrap.css'
import './assets/js/footable/css/footable.core.css'
import './assets/js/footable/css/footable-demos.css'
import './assets/js/footable/css/footable.standalone.css'


Vue.config.productionTip = false;

Vue.use(Vuex)
Vue.use(utils)

const store = new Vuex.Store({
  // 定义状态
  state: {
    userToken:undefined,
    classname: "button-bg",
    breadListState: [
      { name: '首页', path: '/' } 
    ],
    dicdata:{}
  },
  mutations: {
    changebg(state, name) {
      state.classname = name
    },
    breadListMutations(getters, list) {
      getters.breadListState = list;
      sessionStorage.setItem('breadListStorage', list);
    },
    breadListStateAdd(state, obj) {
      state.breadListState.push(obj);
    },
    breadListStateRemove(state, num) {
      state.breadListState.splice(num, state.breadListState.length - num);
    },
    settoken(state, data) {
      state.userToken = data
    },
    setdic:function(state,data){
      state.dicdata = data
    }
  },
  getters: {
    breadListState() {
      return JSON.parse(sessionStorage.getItem('breadListStorage')) || [];
    }
  }
})
Vue.use(ElementUI);
// axios.defaults.baseURL = 'http://clue.api.test';
// axios.defaults.headers.common['Authorization'] = "aaa";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const $axios = axios.create({
  //baseURL: 'http://www.yfqcy.cn',
  baseURL: 'http://clue.api.test',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理
    if (JSON.parse(localStorage.getItem('userinfo')) == null) {
      return JSON.stringify(data);
    } else {
      var postdata = { data: data, token: JSON.parse(localStorage.getItem('userinfo')).token, type: 1 }
      return JSON.stringify(postdata);

    }

  }],
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理
    if (!JSON.parse(data).success) {
      Vue.prototype.$message({
        showClose: true,
        message: JSON.parse(data).errorMessage,
        type: 'error'
      })
    } else {
      return JSON.parse(data).data;
    }
  }],
});
Vue.prototype.$ajax = $axios
Vue.prototype.confindata = config
Vue.component('public-nav', publicnav);
Vue.component('menuslider', menuslider);
Vue.component('publicsearch', publicsearch);
Vue.component('breadcrumb', breadcrumb);
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  //console.log(to,!!localStorage.getItem('userinfo'))
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.state.userToken) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/loginpage',
        query: { redirect: '/' }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }



})
new Vue({
  el: '#app',
  router,
  store,
  components: { App, publicnav, menuslider},
  template: '<App/>'
})
