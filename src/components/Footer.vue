<template>
  <footer id="footer" v-show="$route.meta==='isShow'" >
    <a href="javascript:;" class="footer-item " :class="{active:isRed==='/home'}" @click="routerPush('/home')">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="footer-item" :class="{active:isRed==='/classifyme'}" @click="routerPush('/classifyme')">
      <i class="iconfont icon-viewlist"></i>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="footer-item" :class="{active:isRed==='/identify'}" @click="routerPush('/identify')" >
      <i class="iconfont icon-pic"></i>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="footer-item" :class="{active:isRed==='/shopping'}" @click="routerPush('/shopping')">
      <i class="iconfont icon-gouwuche1"></i>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="footer-item" :class="{active:isRed==='/my'}" @click="routerPush('/my')">
      <i class="iconfont icon-wode"></i>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      isRed: ''
    }
  },
  mounted (){
    console.log(this.$router)
    this.isRed = this.$route.path
  },
  methods: {
    routerPush (url){
      this.isRed = url
      this.$router.push(url)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" ref="stylesheet/stylus" scoped>

  #footer
    width 100%
    position fixed
    bottom  0
    left  0
    font-size 24px
    background-color #ffffff
    height 98px
    display flex
    justify-content center
    align-items center
    .footer-item
      width 20%
      display flex
      flex-direction column
      align-items center
      &.active
        color red




</style>
