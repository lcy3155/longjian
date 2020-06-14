import Vue from 'vue'
import Router from 'vue-router'

//主页面
import index from '@/views/index' //首页
import server from '@/views/server' //服务页
import center from '@/views/center' //个人中心
import market from '@/views/market' //首页

import setting from '@/views/center/setting'  //设置个人中心
import callCenter from '@/views/server/callCenter' //订单详情
import gameCenter from '@/views/server/gameCenter' //案件处理状态
import helpCenter from '@/views/server/helpCenter' //附件上传页
import packageCenter from '@/views/server/packageCenter' //新增订单页
import playCenter from '@/views/server/playCenter' //新增订单详情编辑页
import sellCenter from '@/views/server/sellCenter' //修改订单
import SyntCenter from '@/views/server/SyntCenter' //新增订单产品
// ---------
import product from '@/views/server/product' //产品

// 以下是之前的---------------------------------------------------------------------------------------------------------


//服务中心
//账户
import login from '@/views/account/login' //登陆
import register from '@/views/account/register' //注册
import forget from '@/views/account/forgot_password' //忘记密码

//个人中心



Vue.use(Router)

export default new Router({
  routes: [
   /* 账户*/
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/register/:mobile',
      name: 'register',
      component: register,
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget
    },
    //主页面
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/server',
      name: 'server',
      component: server
    },
    {
      path: '/center',
      name: 'center',
      component: center
    },
    {
      path: '/market',
      name: 'market',
      component: market
    },
    //服务
    {
      path: '/helpCenter',
      name: 'helpCenter',
      component: helpCenter
    },
    {
      path: '/callCenter',
      name: 'callCenter',
      component: callCenter
    },
    {
      path: '/gameCenter',
      name: 'gameCenter',
      component: gameCenter
    },
    {
      path: '/playCenter',
      name: 'playCenter',
      component: playCenter
    },
    {
      path: '/sellCenter',
      name: 'sellCenter',
      component: sellCenter
    },
    {
      path: '/packageCenter',
      name: 'packageCenter',
      component: packageCenter
    },
    {
      path: '/SyntCenter',
      name: 'SyntCenter',
      component: SyntCenter
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    //中心
    {
    path: '/setting',
    name: 'setting',
    component: setting
   },
  ]
})
