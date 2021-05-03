//home的vuex模块
import {reqCategoryList,reqBannerList,reqFloorList} from '@/api'
const state={
  //存储数据
  categoryList:[],//是我们后期发请求拿到的数据
  bannerList:[],
  floorList:[],
}
const mutations={
  //直接修改数据
  RECEIVE_CATEGORYLIST(state,categoryList){
    state.categoryList=categoryList
  },
  RECEIVE_BANNERLIST(state,bannerList){
    state.bannerList = bannerList
  },
  RECEIVE_FLOORLIST(state,floorList){
    state.floorList = floorList
  }

}
const actions={
  //包含任意的异步操作，与用户做交互，间接提交mutations
  async getCategoryList({commit}){
    //发送请求拿数据，提交mutations，存储到state
    const result = await reqCategoryList()//这个是接口请求函数
    if (result.code === 200) {
      commit('RECEIVE_CATEGORYLIST',result.data)//将数据放到mutations里面
    }
  },
  async getBannerList({commit}){
    const result = await reqBannerList()
    if(result.code === 200){
      commit('RECEIVE_BANNERLIST',result.data)
    }
  },

  async getFloorList({commit}){
    const result = await reqFloorList()
    if(result.code === 200){
      commit('RECEIVE_FLOORLIST',result.data)
    }
  },
}
const getters={
  //简化数据的操作
}
export default{
  state,
  mutations,
  actions,
  getters,
}