<template>
  <div id="home-warp">
    <Header/>
    <Banner/>
    <!-- 导航618 -->
    <NavSix />
    <RecommendF :isShow="0" :VuexData="'sceneLightShoppingGuideModule'"/>
    <CategoyLists :isCategoy="0" :swipe="'personalShop'"/>
    <CategoyLists :isCategoy="1" :swipe="'flashSaleModule'"/>
    <RecommendF :isShow="1" :VuexData="'myMoked'"/>
    <CategoyLists :isCategoy="2" :swipe="'newItemList'"/>
    <CategoyLists :isCategoy="3" :swipe="'popularItemList'"/>
    <CategoyLists :isCategoy="4" :swipe="'topicList'"/>
    <CategoyLists :isCategoy="5" :swipe="'zhongChouList'"/>
    <CategoyLists :isCategoy="999" v-for="(item, index) in categoryModule" :key="index" :swipe="item"/>
    <HomeFooter/>



 </div>
</template>

<script type="text/ecmascript-6">
import RecommendF from '../../components/Home/recommend.vue'
import NavSix from '../../components/Home/nav-six.vue'
import Banner from '../../components/Home/banner.vue'
import Header from '../../components/Home/header.vue'
import CategoyLists from '../../components/Home/categoryList'
import HomeFooter from '../../components/Home/home-footer'
 export default {
  name: 'Home',
  components:{
    NavSix,
    Banner,
    Header,
    RecommendF,
    CategoyLists,
    HomeFooter
  },
  computed:{
    categoryModule(){
      return this.$store.getters.categoryModule
    }
  }
 }
 

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #home-warp
    // height 100%
    overflow hidden
    background-color #f4f4f4
    

            

        


 
</style>