<template>
 <div>
  <header class="header">
     
    <span  >
              网易严选
    </span>
    <span class="shopping-header-right" >
      领券
    </span>    
  </header>
  <ul class="g-grow" >
    <li class="item" v-for="(item, index) in policyDescList" :key="index" >
      <a >
        <i class="u-icon" :style="`background-image:url(${item.icon})`" >
        </i>
        <span class="text" >{{item.desc}}</span>
      </a>
    </li>
  </ul> 
  <div class="content-warp">
    <div class="shoping-trolley">
      <div class="bgcolor"></div>
      <div class="no-register" >
        <p> 去添加点什么吧</p>
        <div class="register-btn" @click="$router.push('/my')">
          登录
        </div>

      </div>
     
    </div>
  </div>   


 </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
 export default {
   name: 'Shoping-trolley',
     computed:{
     ...mapGetters(['policyDescList'])
   },
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    width 100%
    height 88px
    padding 0px 30px
    box-sizing border-box
    font-size 40px
    display flex
    justify-content space-between
    align-items center
    background-color #ffffff
    .shopping-header-right
      color #ff0000
      font-size 32px
      margin-right  40px
  .g-grow
    position relative
    z-index 1
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
  .content-warp
    position: fixed;
    top 88px
    left 0
    bottom 0
    z-index 0
    width 100%
    background-color #f4f4f4
    text-align center 
    display flex
    align-items center   
    .shoping-trolley
      width 100%
      height 300px
      .bgcolor
        background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png') 
        background-size 248px 248px
        background-repeat no-repat
        width 248px
        height 248px
        margin 0 auto 8px
      .no-register
        width 100%
        text-align center
        p            
          height 27px
          margin-bottom 50px
          line-height 27px
          font-size 27px
        .register-btn
          width 480px
          height 92px
          margin 0 auto
          background-color #b4282d
          border-radius 10px
          color #ffffff
          font-size 35px
          line-height 92px



 
</style>
