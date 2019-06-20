<template>
<div>
  <div v-if="isShow===0" class="recommend-list">
    <span class="recommend-title"> {{ItemData.styleItem.title}} </span>
    <span class="recommend-text">{{ItemData.styleItem.desc}}</span>
    <div>
      <img :src="ItemData.styleItem.picUrlList[0]" alt="">
      <img :src="ItemData.styleItem.picUrlList[1]" alt="">
    </div>
  </div>
   <div v-if="isShow===1" class="recommend-list-two">
    <span class="recommend-title">{{ItemData.styleItem.title}} </span>
    <span class="recommend-text"> {{ItemData.styleItem.desc}}   </span>
    <span v-show="ItemData.styleItem.itemFrom===0" >享今日特价</span>
    <div class="list-two">
      <img :src="ItemData.styleItem.picUrlList[0]" alt="">
    </div>
  </div>
 </div>
</template>

<script type="text/ecmascript-6">
 export default {
   props:[
    'isShow',
    'ItemData'
   ],
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.recommend-list,.recommend-list-two  
  width 323px
  height 244px
  margin-left 4px
  margin-top 4px
  padding 20px 0 0 20px
  background-color #f5f5f5
  span 
    display block
    box-sizing border-box
    width 100%
    padding-left 10px
  .recommend-title
    color #000
    font-size 20px
  .backgroundcolor
    background-color red
  .color 
    red
  div
    display flex
    img 
      width 150px
      height 150px
      margin-left 4px
      display block
.recommend-list-two
  position relative
  span 
    display block
    box-sizing border-box
    width 100%
    padding-left 10px
  .list-two
    position absolute
    right 0
    top 0
    img 
      width 200px
      height 200px
      

    



</style>
