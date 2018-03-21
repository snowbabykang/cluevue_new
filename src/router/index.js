import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import login from '@/views/loginpage/login'
import register from '@/views/loginpage/register'
import findpassword from '@/views/loginpage/findpassword'
import loginpage from '@/views/loginpage/loginpage'
import cluelist from '@/views/clue/cluelist'
import clueadd from '@/views/clue/clueadd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/clue',
      name: 'clue',
      component: index,
      children:[
        {
          path: '/',
          name: 'cluelist',
          component: cluelist
        },
        {
          path: 'clueadd',
          name: 'clueadd',
          component: clueadd
        },
        {
          path: 'findpassword',
          name: 'findpassword',
          component: findpassword
        }
      ]
    },
    {
      path: '/loginpage',
      name: 'loginpage',
      component: loginpage,
      children:[
        {
          path: 'login',
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
