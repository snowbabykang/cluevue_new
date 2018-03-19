// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import publicnav from './components/publicnav'
import menuslider from './components/menu'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/loader-style.css'
import './assets/css/bootstrap.css'
import './assets/css/signin.css'
import './assets/css/style.css'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component('public-nav',publicnav);
Vue.component('menuslider',menuslider);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App,publicnav,menuslider},
  template: '<App/>'
})
