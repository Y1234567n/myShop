
<template>
 <div class="home-footer">
 
     <div class="btns">
       <div class="btn-lfte">下载App</div>
       <div class="btn-right">电脑版</div>
     </div>
     <p class="login">
       <span>网易公司版权所有&copy;1997-2019</span>
       <span>食品经营许可证：JY1330108011171</span>
     </p>

 </div>
</template>

<script type="text/ecmascript-6">
 export default {
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home-footer
    width 100%
    box-sizing border-box
    margin-bottom 100px
    padding 54px 20px 28px
    display flex
    flex-direction column
    background-color #414141
    .btns 
      width 100%
      margin-bottom 36px
      display flex
      justify-content center
      div 
        height 60px
        width 170px
        border 2px solid #999
        border-radius 10px
        color #fff
        font-size 24px
        font-weight 700
        text-align center
        line-height 60px
      .btn-lfte
        margin-right 50px
    .login
      width 100%
      display flex
      flex-direction column
      span 
        color #929292
        font-size 15px
        text-align center
    


 
</style>
