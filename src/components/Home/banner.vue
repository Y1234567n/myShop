<template>
 <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../imgs/banner.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../imgs/banner.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../imgs/banner.jpg" alt="">
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>   
    </div>
    <ul class="g-grow" >
      <li class="item" v-for="(item, index) in policyDescList" :key="index" >
        <a >
          <i class="u-icon" :style="`background-image:url(${item.icon})`" >
          </i>
          <span class="text" >{{item.desc}}</span>
        </a>
      </li>
    </ul>    
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import { mapGetters } from 'vuex'
 export default {
  async mounted(){
       const HomeDatas = await this.$store.dispatch('getHomeData')
      const bannerSwiper = new Swiper ('.swiper-container', {
      loop: true, // 循环模式选项  
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }
   })  
   },
   computed:{
     ...mapGetters(['policyDescList'])
   },
   
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.banner
  background-color #ffffff
  width 100%
  .swiper-container
    width 100%
    height 370px
    .swiper-wrapper
      width 100%
      height 370px
      .swiper-slide
        width 100%
        img
          display block
          width 100%
  .g-grow
    width 100%
    height 72px
    box-sizing border-box
    padding 0 30px
    display flex
    justify-content space-between
    .item
      width 230px
      text-align center
      a 
        text-align center
        line-height 72px
        color #000
        i 
          display inline-block
          width 32px
          height 32px
          margin-right 10px
          background-size 32px 32px
          margin-top 10px

   

 
</style>
