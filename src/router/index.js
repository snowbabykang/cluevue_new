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

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: '首页',
      component: index,
      redirect:'/clue',
      children: [{
          path: 'clue',
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
          path: 'register',
          name: 'register',
          component: register
        },
        {
          path: 'findpassword',
          name: 'findpassword',
          component: findpassword
        }
      ]
    }
  ]
})
