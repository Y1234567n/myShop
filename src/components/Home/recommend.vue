<template>
 <div class="recommend">
   <a href="javascript:;" v-for="(item, index) in getData" :key="index">
     <Xzj :ItemData='item' :isShow="isShow*1"/>
   </a>
 </div>
</template>

<script type="text/ecmascript-6">
import Xzj from './small/szx.vue'
import { mapGetters } from 'vuex'
 export default {
   props:[
     'isShow',
      'VuexData'
   ],
   components:{
     Xzj
   },
   computed:{
      // ...mapGetters({getData:'sceneLightShoppingGuideModule'}) 
      getData(){
        return this.$store.getters[this.VuexData]
      }    
      
   }   
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommend
    width 100%
    height 576px
    box-sizing  border-box
    padding 10px 30px 30px 26px
    display flex
    flex-wrap wrap
    background-color #ffffff
    margin-bottom 15px
    
     



 
</style>
