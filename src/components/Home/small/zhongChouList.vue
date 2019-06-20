<template>
  <div class="item-list-li" >
    <div style="backgroundColor:#f5f6f5">
      <img class="item-img" :src="liData.picUrl" alt="" />    
    </div>  
    <div class="content">      
        <span >{{liData.name}} </span>
        <span style="color:#f00" >{{liData.showRetailPrice}}</span>
        <span ></span> 
        <span >{{liData.supportNum}}</span>    
    </div>
   
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   props:[
     'liData'
   ],
  
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .item-list-li
    box-sizing border-box
    padding 30px 30px 0 30px
    width 100%
    margin-top 2px
    display flex
    justify-content space-between
    align-items center
    .item-img
      width 210px
      height 210px
    .content
      width 450px
      height 168px
      display flex
      flex-direction column
      justify-content center
      span 
        font-size 24px
        // &:nth-child(1)
        // color #000
        // &:nth-child(2)
        // color #f00



</style>
