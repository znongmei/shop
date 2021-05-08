//接口请求函数，配置一些接口的函数，如果要用接口，就直接可以调用这函数
import request from './ajax'
import mockAjax from '@/api/mockAjax'
//这里的request是我们在ajax文件里面对axios二次封装的实例
export const reqCategoryList=()=>{
  return request({
    url:'/product/getBaseCategoryList',
    method:'GET'
  })
}
//写banner和floor两个接口函数
export const reqBannerList=()=>{
  return mockAjax({
    url:'/banner',
    method:'get'
  })
}
export const reqFloorList=()=>{
  return  mockAjax({
    url:'/floor',
    method:'get'
  })
}

//search 接口请求函数
export const reqSearchInfo=(searchParams)=>{
  return request({
    url:'/list',
    method:'post',
    //SearchParams是用户搜索的参数。这个参数使用户发请求的时候传递的
    data:searchParams
  })
}

// reqSearchInfo({})
