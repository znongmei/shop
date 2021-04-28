//vuex总的state
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//将小的模块引入放到总的store里面
import hemo from './home'
import user from './user'
//vuex四大核心概念
const state = {
  //存储数据
}
const mutations = {
  //直接修改数据
}
const actions = {
  //与组件当中用户对接，一般是异步发请求，提交mutations
}
const getters = {
  //简化数据的操作
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    //也是一个模块化,将小的模块放到里面进行管理,也就是合并起来
    hemo,
    user,

  }
})