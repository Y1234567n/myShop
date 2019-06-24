<template>
 <div>
  <header class="header">
    <div class="search" @click="$router.push('/search')" >
      <span class="iconfont icon-sousuo search-icon">
      </span>
      <input class="search-input" type="text" v-model="searchValue" :placeholder="hotKeyDown">
      <div class="delete">
        <span class="iconfont icon-xiangzuojiantou "></span>
      </div>
    
    </div>
    <div class="btn-register" @click="$router.back()" >取消</div>
  </header>
  <div class="hot-bot" v-show="searchValue===''">
    <div class="title">
      热门搜索
    </div>
    <div class="hot-hot-list">
      <div class="hot-bot-item"  v-for="(item, index) in hotKeyword" :key="item.extra?item.extra.taskId:index"  :class="{active:item.highlight}">
       <!-- <a :href="item.schemeUrl"> {{item.keyword}}</a> -->
        <a href="##"> {{item.keyword}}</a> 
      </div>     
    </div>
  </div>
  <ul class="keyDown" v-if="searchValue!==''">
      <li v-for="(item, index) in keyDown" :key="index">
        {{item}}
      </li>
    </ul>
 </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import { stat } from 'fs'
import {reqSearch} from '../../api'
import { setTimeout, clearTimeout } from 'timers';
 export default {
   data() {
     return {
       searchValue:'',
       keyDown:[]
     }
   },
   mounted(){
     this.$store.dispatch('getInpotKeyDown')
     this.throttle = true
     this.timer
   },
   computed: {
     ...mapState({
        hotKeyDown: state =>   state.homes.hotKeyDown ,
        hotKeyword: state => state.homes.hotKeyword
       
     })
   },
   watch:{
    searchValue(){
      // console.log(this.searchValue)
      if(!this.throttle ){
        return
      }
     if(this.throttle ){
      this.throttle =false
      this.timer=setTimeout(async ()=>{     
         const result =await reqSearch(this.searchValue)
          if(result.code==='200'){
            this.keyDown = result.data
            console.log(this.keyDown)
          }
          this.throttle = true
      },350)
     }
    

     }
   }

 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    width 100% 
    height 88px
    padding 16px 30px
    box-sizing border-box
    display flex
    justify-content space-between
    align-items center
    .search
      position relative
      background-color #EDEDED
      width 604px
      height 56px
      line-height 56px
      font-size 20px
      box-sizing border-box
      border 1px solid #EDEDED
      display flex
      justify-content space-between
      padding 0 20px
      border-radius 8px
      font-family: PingFangSC-Light,helvetica,'Heiti SC';
      .search-input
        height 54px
        outline none 
        line-height 54px
        border 0px
        width 520px
        background-color #ededee
      .search-icon
        margin-right 10px  
      .delete
        position absolute   
        right 0
        top 0
        width 50px
        height 50px
  .hot-bot
    width 100%
    padding 0 30px 30px
    margin-bottom 20px
    box-sizing border-box
    .title
      width 100%
      height 90px
      font-size 40px
      line-height 90px
      color #999
    .hot-hot-list
      width 100%
      display flex
      flex-wrap wrap
      .hot-bot-item
        border 2px solid #999
        border-radius 4px
        padding 0 15px
        height 45px
        margin 0 32px 32px 0
        line-height 45px
      .active 
        border 2px solid #ff0000
        color #ff0000
  .keyDown
    width 100%
    padding 0 0 0 30px
    box-sizing border-box
    li 
      height 88px
      width 100%
      line-height 88px
      border-bottom 2px solid #999


 
</style>
