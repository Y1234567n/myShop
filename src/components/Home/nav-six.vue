<template>
  <ul class="nav-six" >
    <a  v-for="(item, index) in kingKongList" :key="index" :href="item.schemeUrl">
      <li class="nav-six-item">
        <img :src="item.picUrl" alt="">
        <span>{{item.text}}</span>
      </li>
    </a>
  </ul>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
import { stat } from 'fs';
 export default {

   computed:{
     ...mapGetters(['kingKongList'])

   }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
   .nav-six
      width 100%
      height 341px
      display flex
      flex-wrap wrap
      background-color #FFF6EE
      .nav-six-item
        width 110px
        height 156px
        margin 10px 20px 0px
        display flex
        flex-direction column
        img 
          width 110px
          height 110px
          border-radius 50%
        span 
          text-align center

</style>
