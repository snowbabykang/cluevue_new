import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import login from '@/views/loginpage/login'
import register from '@/views/loginpage/register'
import findpassword from '@/views/loginpage/findpassword'
import loginpage from '@/views/loginpage/loginpage'

import cluelist from '@/views/clue/cluelist'
import clueadd from '@/views/clue/clueadd'
import clueedit from '@/views/clue/clueedit'
import clueview from '@/views/clue/clueview'

import checkInAdd from '@/views/checkIn/checkInAdd'
import checkInEdit from '@/views/checkIn/checkInEdit'
import checkInView from '@/views/checkIn/checkInView'
// import checkInList from '@/views/checkIn/checkInList'

import timeout from '@/views/timeout/index'
import pagerwork from '@/views/pagerwork/index'
import regnumber from '@/views/pagerwork/index'
import distribution from '@/views/distribution/index'
import excelin from '@/views/excelin/index'

import problemregister from '@/views/problemregister/index'

import filngregister from '@/views/filngregister/index'

import trend from '@/views/regnumber/trend'
import proportion from '@/views/regnumber/proportion'
import unproportion from '@/views/regnumber/unproportion'
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
        path: 'checkInAdd',
        name: '添加登记',
        component: checkInAdd
      },
      {
        path: 'checkInEdit',
        name: '修改登记',
        component: checkInEdit
      },
      {
        path: 'checkInView',
        name: '查看登记',
        component: checkInView
      },
      {
        path: 'clueadd',
        name: '添加线索',
        component: clueadd
      },
      {
        path: 'clueedit',
        name: '修改线索',
        component: clueedit
      },
      {
        path: 'clueview',
        name: '查看线索',
        component: clueview
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
      // {
      //   path: 'problemregister',
      //   name: '问题线索处置情况登记表',
      //   component: problemregister
      // },
      // {
      //   path: 'filngregister',
      //   name: '立案案件登记表',
      //   component: filngregister
      // },
      {
        path: 'trend',
        name: '案件数量趋势',
        component: trend
      },
      {
        path: 'proportion',
        name: '各职级案件比例',
        component: proportion
      },
      {
        path: 'unproportion',
        name: '未结案比例',
        component: unproportion
      },
      {
        path: 'excelin',
        name: 'excel导入',
        component: excelin
      }
    ]
  },
  {
    path: '/',
    name: 'index',
    component: loginpage,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    children: [
      {
        path: '/findpassword',
        name: 'findpassword',
        component: findpassword
      }, {
        path: '/register',
        name: 'register',
        component: register
      }, {
        path: '/loginpage',
        name: 'login',
        component: login
      }
    ]
  }
  ]
}
)
