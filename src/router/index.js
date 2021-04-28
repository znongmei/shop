import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'


export default new VueRouter({
  routes:[
    {
      path:'/home',//主页
      component:Home,
    },
    {
      path:'/login',//登录页
      component:Login,
       //meta是路由对象当中的元配置项
       meta:{
        isHidden:true,
      }
    },
    {
      path:'/register',//注册页
      component:Register,
      meta:{
        isHidden:true,
      }
    },
    {
      path:'/search',//搜索页
      component:Search,
    },
    {
      path:'/',
      component:Home,
    }
  ]
})