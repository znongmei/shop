//这个文件是对axios的二次封装,额外的让axios发送请求的时候，具有其它的功能。
import axios from 'axios'//引入axios
import NProgress  from 'nprogress';
import "nprogress/nprogress.css";
//以后只要是对axios二次封装，不会在axios身上直接封装，而是创建一个axios实例去封装
const service=axios.create({//axios.create()创建一个新的和axios具有相同功能的实例
  //设置基础路径和超时限制
  baseURL:'/mock',
  timeout:20000
})
//添加进度条信息：nprogress、
//请求拦截器
service.interceptors.request.use(function (config) {
 //config是我们的请求报文,最后需要返回去.
  NProgress.start();//开启进度条
  return config;
}, function () {
//响应拦截器这里可以不做任何操作
});

// 响应拦截器
service.interceptors.response.use(function (response) {
  NProgress.done();//关闭进度条
  return response.data;// 返回的响应不再需要从data属性中拿数据,直接使用response即可.
}, function (error) {
  NProgress.done();
  alert('请求失败'+error.message||'未知错误');
  return new Promise(()=>{})//后面继续处理这个错误,返回错误的promise
   // return Promise.reject(new Error('发送请求失败')) //返回pending状态的promise,终端promise链,没有下文
});
//统一处理请求错误，具体请求也可以选择处理或不处理


export default service; //暴露封装好的axios实例