<template>
 <div id="home-list">
   <header class="home-title" >
     <Title :isCategoy="titleName" :isImgTitlePicUrl="swipe.titlePicUrl" />
   </header>
   <section class="home-list-content">
    <ListItem :swipe="swipe" v-if="swipe!=='zhongChouList'"/>
    <div  v-if="swipe==='zhongChouList'" >
      <ZhongChou  v-for="(item, index) in zhongChouList" :key="index" :liData="item" />
    </div>
   
   </section>
 </div>
</template>
<script type="text/ecmascript-6">
  import ListItem from './small/List-Item.vue'
  import Title from './small/title.vue'
  import ZhongChou from './small/zhongChouList.vue'
 export default {
   props:['swipe','isCategoy'],
   components:{
     ListItem,
     Title,
     ZhongChou
   },
   computed:{
      titleName(){   
        // 判断isCategoy需不需要
        if(this.isCategoy<100){
          return this.$store.getters.component[this.isCategoy]||['']
        }else{
          return false
        }      
      },
      zhongChouList (){
        if(this.swipe==='zhongChouList'){
          return  this.$store.getters[this.swipe]||[]
        }
      }
   }  
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #home-list
    width 100%
    background-color #ffffff
    margin-bottom  15px        


 
</style>
