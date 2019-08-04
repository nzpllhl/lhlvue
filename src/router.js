import Vue from 'vue'
import Router from 'vue-router'

import home from './components/tabber/home'//首页
// import member from './components/tabber/member'//会员
import member from './components/tabber/member'
import shopcar from './components/tabber/shopcar'//购物车
import search from './components/tabber/search'//搜索
import newsList from './components/news/newsList'//新闻列表
import newsListInfo from './components/news/newsListInfo'//新闻详情

Vue.use(Router)
export default new Router({
  mode: 'history',
  linkActiveClass: "mui-active",//给每一个路由加上相同的类名
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'//如果输入的是跟路径，那么就重定向到home

    },

    {
      path: '/home',
      component: home,

    },
    {
      path: '/member',
      component: member

    },

    {
      path: '/shopcar',
      component: shopcar

    },
    {
      path: '/search',
      component: search

    },
    {
      path: '/home/newsList',
      component: newsList
    },
    {
      path: '/home/newsListInfo',
      component: newsListInfo
    }
  ]
})
