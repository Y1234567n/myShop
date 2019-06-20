<template>
  <div class="item-list-li" :class="{big:liData.big,topicIds:liData.topicIds}" >
    <div style="backgroundColor:#f5f5f5">
      <img class="item-img" :src="liData.picUrl||liData.scenePicUrl" alt="" />
    </div>  
    <div class="content">
      <div :class="{isBgColor:liData.topicIds}">
        <span class="content-title"  :class="{active:liData.big}">
          {{
            liData.name ||  liData.title
            }} 
        </span>
        <span v-if="liData.big || liData.topicIds">
          {{
          liData.simpleDesc || liData.subtitle
          }}
        </span>
        <span style="color:red"> 
          {{liData.topicIds?'':'￥'}}
          {{
            liData.counterPrice || liData.activityPrice 
          }}
          </span> 
        <span v-if="liData.originPrice" ><s>￥{{liData.originPrice}}</s></span>    
      </div>
    </div>
    <div class="discounts" v-if="liData.discounts">
      <p  v-for="(item, index) in liData.discounts" :key="index">{{item}}</p>
    </div>   
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   props:[
     'liData'
   ],
   data() {
     return {
       swipe: false
     }
   },
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .item-list-li
    margin-right  20px
    width 216px
    .item-img
      width 216px
      height 216px
      margin-bottom 12px
    .content
      display flex
      flex-wrap wrap
      word-break:break-all 
      align-items center
      .active
        font-size 30px
        font-weight 700
    .discounts 
      display flex
      flex-wrap wrap
      p
        border 2px solid #f00
        border-radius 5px
        height 30px
        font-size 12px
        line-height 30px
        color red
        margin 0 8px 3px 0
  .big
    width 100%
    display flex
    .item-img
      width 280px
      height 280px
      margin-bottom 12px
    .content
      width 312px
      margin 0 50px
  .topicIds
    width 480px !important 
    height 354px
    margin  0 31px 24px 0
    .item-img
      width 480px
      height 268px
      border-radius 15px 15px 0 0
    .content
      height60px 
      .isBgColor
        background-color #f5f5f5
        .content-title
          font-weight 700
          font-size 21px


    


</style>
