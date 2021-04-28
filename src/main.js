import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

Vue.config.productionTip = false

import {reqCategoryList} from '@/api'

//全局注册非路由组件，就是一个组件有多个地方用到
import TypeNav from '@/components/TypeNav'//引入
Vue.component('TypeNav',TypeNav)//注册，前面是名称，后面是组件


reqCategoryList()
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
