<template>
 <div id="classify">
  <header class="header">
    <div class="search" @click="$router.push('/search')" >
      <span class="iconfont icon-sousuo search-icon">
        搜索商品，共{{shopNo}}款好品
      </span>
    </div>
  </header>
  <div class="content">
    <aside class="nav-left">
      <div  ref="navLeft" style="height:100%">     
        <ul class="nav-list">
          <li class="nav-item" 
          :class="{active:isRed === index }" 
          v-for="(item, index) in classifyNav"
          :key="item.id||index" 
          @click="isRed=index">
              {{item.name}}
          </li>
        </ul>
      </div>
    </aside>
    <article class="content-right" >
      <div ref="contentRight" style="height:100%">
        <div>
          <div class="classify-banner">
            <img :src="classifyNav[isRed]?classifyNav[isRed].bannerUrl:'../../imgs/banner.jpg'" alt="">
          </div>
          <ul class="content-list">  
               <!--  -->
            <li class="content-item" 
            v-for="(item, index) in contentArr" 
            :key="item.id||index">
              <img :src="item?item.bannerUrl:'../../imgs/2.png'" alt="">
                <span>
                  {{item.name}}
                </span>
            </li>
          </ul> 
        </div> 
     </div>  
   </article>

  </div>
 </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
 export default {
   name: 'Classify',
   data() {
     return {
       isRed:0,
       contentArr: []
     }
   },
   mounted(){
     this.$store.dispatch('getshopNUM') 
   },
    computed: {
    classifyNav(){
      const navLeftDate = this.$store.getters.classifyNav||[]
     if(navLeftDate[0])  this.contentArr= navLeftDate[0].subCateList
       this.$nextTick(()=>{
       new BScroll(this.$refs.navLeft,{
        scrollY:true,
        click: true
     })
       })
      return navLeftDate
    },
    ...mapState({
      shopNo: state => state.homes.shopNO     
    }),    
  },
  watch:{
    isRed(){
      this.contentArr = this.classifyNav[this.isRed].subCateList    
    },
    contentArr(){
       this.$nextTick(()=>{
          new BScroll(this.$refs.contentRight,{
            scrollY:true,
            click: true
        })
      })
    }
  }     
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    width 100%
    padding 0 30px
    height 88px
    box-sizing border-box
    background-color #ffffff
    display flex
    align-items center
    .search
      width 100%
      text-align center
      border 1px solid #ededed
      background-color #ededed
      border-radius 5px
      height 56px
      line-height 56px
  .content
    width 100%
    height 1148px
    background-color #ffffff
    border-top  1px solid #ededed
    border-bottom 1px solid #ededed
    display flex
    justify-content space-between
    .nav-left
      height 100%
      box-sizing border-box
      padding-top 40px
      width 162px
      overflow hidden
      .nav-list
        width 100%
        display flex
        flex-wrap wrap
        .nav-item
          width 100%
          height 50px
          margin-bottom 50px
          box-sizing border-box
          text-align center
        .active
          border-left 4px solid #f00
          color #ff0000
    .content-right
      width 588px
      height 100%
      padding 30px 30px 21px 
      box-sizing border-box
      overflow hidden
      .classify-banner
        width 528px
        height 192px
        margin-bottom 32px
        overflow hidden
        img 
          width 100%
          height 100%
      .content-list
        display flex
        flex-wrap wrap
        overflow hidden
        .content-item
          width 144px
          height 216px
          margin-right 32px
          display flex
          flex-direction column
          img 
            width 144px
            height 144px
          span 
            word-break:break-all 
            text-align center 



        
      

 
</style>

