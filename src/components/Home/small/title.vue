<template>
  <div class="home-title" :class="{isHeight:!isCategoy}">
    <div class="title-left" v-if="isCategoy">
      <span class="title">{{isCategoy[0]}}</span>
      <div v-if="isCategoy[2]" class="time">
        <span>30</span>:
        <span>59</span>:
        <span>35</span>
      </div>
    </div>
    <div class="title-right" v-if="isCategoy&&isCategoy[1]">
      <span>更多</span>
      <span class="iconfont icon-xiangyoujiantou"></span>
    </div>
    <img :src="isImgTitlePicUrl" alt="" v-if="!isCategoy">
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   props:[
     'isCategoy',
     'isImgTitlePicUrl'
     ],
    data() {
     return {
       time:true
     }
   },

 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home-title
    width 100%
    height 100px
    box-sizing border-box
    padding 0 30px
    display flex
    justify-content space-between
    .title-left
      display flex
      height 100%
      span
        line-height 100px
        font-size 30px
        color #000
      .time
        display flex
        align-items center
        height 100%
        span 
          width 36px
          height 36px
          margin 0 10px
          background-color #000
          font-size 14px
          line-height 36px
          color #fff
          text-align center
          border-radius 5px           
    .title-right
      line-height 100px
      .iconfont
        font-size 15px
  .isHeight
    height 370px
    margin-bottom 15px
    padding  0
    img 
      width 100%
</style>
