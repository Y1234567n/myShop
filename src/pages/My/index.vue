<template>
 <div class="my-warp"  >
  <div >    
    <div class="header-warp">
      <header class="header">
        <div class="iconfont icon-shouye"  @click="$router.push('/home')">
        </div>
        <div class="login" >
                  网易严选
        </div>
        <div>
        <span class="iconfont icon-sousuo" @click="$router.push('/search')" >
        </span>
        <span class="iconfont icon-gouwuche" @click="$router.push('/shopping')" >

        </span>    
        </div>
      </header>
    </div>
    <div class="register-warp" v-show="whoIsShow===1" >
      <div class="register-logo">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="register-btns">
        <div class="register-phone" @click="whoIsShow = 2">
          <span class="iconfont icon-accountfilling">
              &nbsp;
              手机号码登录
          </span> 
        </div>
        <div class="register-emil" @click="whoIsShow = 3">
          <span class="iconfont icon-wode"></span>&nbsp;
          邮箱账号登录
        </div>
        <p>
          手机号快捷注册&nbsp;<span class="iconfont icon-xiangyoujiantou"></span>
        </p>

      </div>

    </div>
    <!-- <div class="input-warp"> -->
      <!-- <div class="register-logo">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
  -->   
  </div>
  <div style="width:100%;overflow:hidden" v-if="whoIsShow===2">
    <Phone  :setWhoIsSho="setWhoIsSho" />
  </div>
  <div style="width:100%;overflow:hidden" v-if="whoIsShow===3">
    <Email  :setWhoIsSho="setWhoIsSho" />
  </div>
 
 </div>
</template>

<script type="text/ecmascript-6">
import Phone from '../../components/my/PhoneLogin'
import Email from '../../components/my/EmailLogin'
 export default {
   name: 'My',
   components:{
     Phone,
     Email
   },
   data() {
     return {
       whoIsShow:1  //1选择登录方式 2 手机号登录方式 3邮箱登录方式
     }
   },
   methods: {
     setWhoIsSho(){
       this.whoIsShow = 1
     }
   },

 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .my-warp
    width 100%
    height 100%
    overflow hidden
    .header-warp
      width 100%
      background-color #ffffff
      .header
        height 88px
        padding 16px 30px
        box-sizing border-box
        font-size 40px
        display flex
        justify-content space-between
        align-items center
        .login
          height 56px
          line-height 56px
          box-sizing border-box
          outline none    
          border-radius 8px
          font-family: PingFangSC-Light,helvetica,'Heiti SC'
          text-align center
        .iconfont 
          font-size 50px
    .register-warp
      width 100%
      height 100%
      margin-bottom -88px
      .register-logo
        width 100%
        text-align center
        margin 160px 0
        height 90px
        img 
          width 268px
          height 90px
    .register-btns
      width 670px
      height 292px
      padding 0 40px
      font-size 35px
      >div
        width 100%
        margin-bottom 32px
        height  90px
        border-radius 10px
        border 2px solid #B4282D
        color #B4282D
        line-height 90px
        text-align center
      .register-phone  
        background-color #B4282D
        span
          color #ffffff
      p 
        text-align center



 
</style>
