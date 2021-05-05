<template>
  <div>
    <div class="swiper-container" id="mySwiper" ref="bannerSwiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(banner, index) in bannerList"
          :key="banner.id"
        >
          <img :src="banner.imgUrl" />
        </div>
        <!-- <div class="swiper-slide">
              <img src="./images/banner2.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="./images/banner3.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="./images/banner4.jpg" />
            </div> -->
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
export default {
  props:['bannerList'],//接收数据，父组件通过标签给子组件传递数据
   watch:{
    bannerList:{
      handler(newVal,oldVal){
         this.$nextTick(()=>{
            new Swiper (this.$refs.bannerSwiper, {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },

        })
         })
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
