import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'



Vue.config.productionTip = false

// import {reqCategoryList} from '@/api'

//全局注册非路由组件，就是一个组件有多个地方用到
import TypeNav from '@/components/TypeNav'//引入
Vue.component('TypeNav',TypeNav)//注册，前面是名称，后面是组件


// reqCategoryList()
new Vue({
  render: h => h(App),
  router,//所有组件内部可以使用this.$router, this.$route
  store,//所有的组件可以拿到this.$store
}).$mount('#app')
