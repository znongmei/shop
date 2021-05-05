import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import 'swiper/css/swiper.css'//引入swiper的css样式，因为有多个轮播图要用，所以在全局里面引
import '@/mock/mockServe'//引入mock文件

Vue.config.productionTip = false

// import {reqCategoryList} from '@/api'

//全局注册非路由组件，就是一个组件有多个地方用到
import TypeNav from '@/components/TypeNav'//引入三级菜单组件
Vue.component('TypeNav',TypeNav)//注册，前面是名称，后面是组件
import SlideLoop from '@/components/SlideLoop'//引入轮播图组件
Vue.component('SlideLoop',SlideLoop)

// reqCategoryList()
new Vue({
  render: h => h(App),
  router,//所有组件内部可以使用this.$router, this.$route
  store,//所有的组件可以拿到this.$store
}).$mount('#app')
