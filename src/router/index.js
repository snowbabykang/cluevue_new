import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import login from '@/views/loginpage/login'
import register from '@/views/loginpage/register'
import findpassword from '@/views/loginpage/findpassword'
import loginpage from '@/views/loginpage/loginpage'
import cluelist from '@/views/clue/cluelist'
import clueadd from '@/views/clue/clueadd'
import timeout from '@/views/timeout/index'
import pagerwork from '@/views/pagerwork/index'
import regnumber from '@/views/pagerwork/index'
import distribution from '@/views/distribution/index'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      children: [
        {
            path: 'cluelist',
            name: '线索列表',
            component: cluelist
          },
          {
            path: 'clueadd',
            name: '添加线索',
            component: clueadd
      },
       
        {
          path: 'timeout',
          name: '超期提醒',
          component: timeout
        },
        {
          path: 'distribution',
          name: '登记发放',
          component: distribution
        },
        {
          path: 'pagerwork',
          name: '文书管理',
          component: pagerwork
        },
        {
          path: 'regnumber',
          name: '登记管理',
          component: regnumber
        }
      ]
    },
    {
      path: '/loginpage',
      name: 'loginpage',
      component: loginpage,
      children: [{
          path: '',
          name: 'login',
          component: login
        },
        {
          path: '/register',
          name: 'register',
          component: register
        },
        {
          path: '/findpassword',
          name: 'findpassword',
          component: findpassword
        }
      ]
    }
  ]
})
