<template>
 <div id="home-warp">
   <div class="header-warp">
     <header class="header">
       <h1 class="title">网易严选</h1>
       <div class="search" >
         <span class="iconfont icon-sousuo search-icon">
           搜索商品，共25025款好品
         </span>
       </div>
       <div class="btn-register" >登录</div>
     </header>
     <nav class="header-nav">
       <ul class="nav-list"> 
         <li class="nav-item" v-for="(item, index) in nav" :key="index"  :class="{active:isBorder===index}" @click="isBorder = index">
          <span class="nav-item-text">{{item}}</span>
         </li>
       </ul>
       <div class="right">       
        <span class="lucency"></span>
        <span class="iconfont icon-xiangxiajiantou jiantou" ></span>
       </div>

     </nav>

   </div>
 </div>
</template>

<script type="text/ecmascript-6">
 export default {
      name: 'Home',
      data() {
        return {
          nav: ['推荐','家居生活','服饰鞋包','美食酒水','个户清洁','母婴用品','运动旅游','‘数码产品','全球特色'],
          isBorder: 0
        }
      },
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #home-warp
    height 100%
    overflow hidden
    background-color #ffffff
    .header-warp
      width 100%
      height 148px
      .header
        height 88px
        padding 16px 30px
        box-sizing border-box
        display flex
        justify-content space-between
        align-items center
        .title
          widows 138px
          height 40px
          font-size 32px
          font-weight bold
        .search
          background-color #EDEDED
          height 56px
          line-height 56px
          font-size 20px
          box-sizing border-box
          border 1px solid #EDEDED
          outline none 
          margin 0 20px 
          width 442px   
          border-radius 8px
          font-family: PingFangSC-Light,helvetica,'Heiti SC';
          .search-icon
            margin-right 10px     
        .btn-register
          width 74px
          height 40px
          border 2px solid #f00
          text-align center
          line-height 40px
          color #f00
          border-radius 10px
      .header-nav
        height 60px
        position relative
        .nav-list
          position absolute
          left 0
          bottom 0
          padding-left 30px
          height 100%
          width 1460px
          .nav-item
            float left
            height 100%
            padding  0 16px
            line-height 60px
            text-align center
            &.active  
              box-sizing border-box
              color red
              border-bottom  3px solid #f00
            .nav-item-text
              font-size 32px
        .right
          position absolute
          right 0
          bottom 0
          height 60px
          width 160px
          display flex
          .jiantou
            width 100px
            background-color #fff
            text-align center
          .lucency
            width 60px
            background  repeating-linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.3) 50%,rgba(255,255,255,1) 100%)



                
              



        


 
</style>
