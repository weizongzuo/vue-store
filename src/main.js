// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import guide from './components/guide/guide.vue'// 启动页
import guide2 from './components/guide_2/guide_2.vue' // 启动页

import login from './components/login/login.vue'// 登录页
import register from './components/register/register.vue'// 注册页1

import register2 from './components/register2/register2.vue'// 注册页2
import register3 from './components/register3/register3.vue'// 注册页3
import register4 from './components/register4/register4.vue'// 注册页4

import classify from './components/classify/classify.vue'// 分类页
import classifyGroup from './components/classifyGroup/classifyGroup.vue'// 分类页
import goods from './components/goods/goods.vue'// 列表页
import shopInfo from './components/shopInfo/shopInfo.vue'// 商品详情页
import present from './components/present/present.vue'// 商品介绍页

import order from './components/order/order.vue'// 订单页
import order2 from './components/order2/order2.vue'// 确定页
import paySuccess from './components/paySuccess/paySuccess.vue'// 支付成功页

import activity from './components/activity/activity.vue' // 活动页

import more from './components/more/more.vue' // 更多页
import set from './components/set/set.vue'// 微店设置页
import administrate from './components/administrate/administrate.vue'// 商品管理页
import coupon from './components/coupon/coupon.vue'// 优惠卷管理页
import couponInfo from './components/couponInfo/couponInfo.vue'// 优惠卷详情页
import send from './components/send/send.vue'// 发送优惠卷页

import orderManagement from './components/orderManagement/orderManagement.vue'// 订单管理页
import orderInfo from './components/orderInfo/orderInfo.vue'// 订单详情页
import orderTrack from './components/orderTrack/orderTrack.vue'// 订单追踪页

import salesManagement from './components/salesManagement/salesManagement.vue'// 销售管理页
import salesInfo from './components/salesInfo/salesInfo.vue'// 销售详情页

import customer from './components/customer/customer.vue' // 客户管理页
import customerInfo from './components/customerInfo/customerInfo.vue' // 客户详情页
import deal from './components/deal/deal.vue' // 交易详情页

import income from './components/income/income.vue' // 我的收入页
import bank from './components/bank/bank.vue'  // 我的银行卡页
import draw from './components/draw/draw.vue' // 提现页

import personal from './components/personal/personal.vue' // 个人信息页
import editor from './components/editor/editor.vue' // 编辑个人信息页

import password from './components/password/password.vue' // 修改密码页

import shop from './components/shop/shop.vue' // 微店页

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {
    path: '/guide',
    component: guide
  },
  {
    path: '/guide2',
    component: guide2
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/classify',
    component: classify,
    children:
    [{
      path: '',
      component: classifyGroup
    },
    {
      path: 'goods',
      component: goods
    },
    {
      path: '/activity',
      component: activity
    },
    {
      path: '/shop',
      component: shop
    },
    {
      path: '/shopInfo/:id',
      component: shopInfo
    },
    {
      path: '/present',
      component: present
    },
    {
      path: '/order',
      component: order
    },
    {
      path: '/order2',
      component: order2
    },
    {
      path: '/paySuccess',
      component: paySuccess
    },
    {
      path: '/more',
      component: more
    },
    {
      path: '/set',
      component: set
    },
    {
      path: '/administrate',
      component: administrate
    },
    {
      path: '/coupon',
      component: coupon
    },
    {
      path: '/couponInfo/:id',
      component: couponInfo
    },
    {
      path: '/send',
      component: send
    },
    {
      path: '/orderManagement',
      component: orderManagement
    },
    {
      path: '/orderInfo',
      component: orderInfo
    },
    {
      path: '/orderTrack',
      component: orderTrack
    },
    {
      path: '/salesManagement',
      component: salesManagement
    },
    {
      path: '/salesInfo',
      component: salesInfo
    },
    {
      path: '/customer',
      component: customer
    },
    {
      path: '/customerInfo/:id',
      component: customerInfo
    },
    {
      path: '/deal',
      component: deal
    },
    {
      path: '/income',
      component: income
    },
    {
      path: '/bank',
      component: bank
    },
    {
      path: '/draw',
      component: draw
    },
    {
      path: '/personal',
      component: personal
    },
    {
      path: '/editor',
      component: editor
    },
    {
      path: '/password',
      component: password
    }]
  },
  {
    path: '/register2',
    component: register2
  },
  {
    path: '/register3',
    component: register3
  },
  {
    path: '/register4',
    component: register4
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
router.push('/guide')
