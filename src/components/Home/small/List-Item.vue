<template>
  <div>
    <div class="swiper-container swiper2" v-if="swipe==='personalShop'">
      <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(item, index) in dynamicData" :key="index">
           <div class="item-list">
              <div v-for="(item, index) in item" :key="index">
                <Li :liData="item"/>
              </div>
             
           </div>
          </li>
      </ul>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination page2"></div>   
    </div>
    <!-- 非轮播 -->
    <div>
      <div class="swiper-containe" v-if="swipe!=='personalShop'">
        <ul class="swiper-wrappe">
          <li class="swiper-slid" ref="wrapper">
            <div class="item-list" ref="setThisWidth"  :class="{topicId:swipe==='topicList'}">
              <div v-for="(item, index) in dynamicData" :key="item.id||item.itemId||index"  >
                <!-- v-if="item.picUrl||item.primaryPicUrl" -->
                <Li :liData="item"  />               
              </div>
               <div v-if="swipe.itemList" :class="{more:swipe.itemList}">
                 <div>查看更多<span class="iconfont icon-xiangyoujiantou"></span></div>
                </div>                   
            </div>         
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper' 
  import BScroll from 'better-scroll'
  import Li from './li.vue'
 export default {
   props:['swipe'],
   components:{
     Li
     },
   mounted (){
     
    // if(this.swipe==='personalShop'){

    //   this.bannerSwiper = new Swiper ('.swiper2', {
    //     loop: true, // 循环模式选项  
    //     // 如果需要分页器
    //     pagination: {
    //       el: '.swiper-pagination',
    //       type: 'bullets'
    //     }
    //   })  
    // }
    if(this.swipe==='topicList'){
      new BScroll(this.$refs.wrapper, {
        scrollX:true,
        click: true
      })
    }
    if(Object.prototype.toString.call(this.swipe)==='[object Object]'&&this.dynamicData.length>0){
      this.setWidth()
      // new BScroll(this.$refs.wrapper, {
      //   scrollX:true,
      //   click: true
      // })
    }
   },
   computed:{
    //  dynamicData用来根据swipe传递过来的值来获取不同的数据  下面是获取数据的方法
      dynamicData (){   
        // 当swipe是通过循环遍历生成的组件传递过来的对象时，即使用categoryModule数据，通过下面if拿到categoryModule数据下面每个对象的itemList数据
      if(Object.prototype.toString.call(this.swipe)==='[object Object]'){

        return this.swipe.itemList
      }else{
        // 当swipe是直接指定的字符串时，则去vuex中的home模块的计算属性getters获取对应的数据
          const dynamicDatas = this.$store.getters[this.swipe] ||[]
          // this.$nextTick(()=>{
          //   if(this.swipe==='personalShop'){
          //     this.bannerSwiper = new Swiper ('.swiper2', {
          //       loop: true, // 循环模式选项  
          //       // 如果需要分页器
          //       pagination: {
          //         el: '.page2',
          //         type: 'bullets'
          //       }
          //     })  
          //   }
          // })
            if(this.swipe==='personalShop'){       
            let listArr = []
            const swiperArr = dynamicDatas.reduce((arr,item)=>{
              listArr && listArr.push(item)
                if(listArr.length===3){
                  arr.push(listArr)
                  listArr = []
                }           
                return arr
            },[]) 
            return swiperArr
          }else{
          // 判断数据获取来的是数组还是对象
            if (Object.prototype.toString.call(dynamicDatas) === "[object Array]") {
              return  dynamicDatas
            }else if(Object.prototype.toString.call(dynamicDatas)==='[object Object]'){
            return  dynamicDatas.itemList||[]
          }       
        } 
      }  
    }
  },
  watch: {
    dynamicData(){
      if(Object.prototype.toString.call(this.swipe)==='[object Object]'){
      this.setWidth()
      }
  
      this.$nextTick(()=>{
        if(this.swipe==='personalShop'){
          this.bannerSwiper = new Swiper ('.swiper2', {
            loop: true, // 循环模式选项  
            // 如果需要分页器
            pagination: {
              el: '.page2',
              type: 'bullets'
            }
          })  
        }
      })
    }
  },
  methods: {
    setWidth (){
      this.$refs.setThisWidth.style.width=118*(this.dynamicData.length+1) + 20 + 'px'
      new BScroll(this.$refs.wrapper, {
        scrollX:true,
        click: true
      })
    }
  },


 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    width 100%
    .swiper-wrapper
      width 100%
      .swiper-slide
        width 100%
        img
          display block
          width 216px
        .item-list
          width 100%
          box-sizing border-box
          padding 0 10px 0  30px
          display flex

   .swiper-containe
    width 100%
    .swiper-wrappe
      width 100%
      .swiper-slid
        width 100%
        .more
          width 216px
          height 216 !important
          div 
            background-color #f5f5f5
            height 216px
            line-height 216px
            text-align center
            font-size 30px
        img
          display block
          width 216px
        .item-list
          width 100%
          box-sizing border-box
          padding 0 10px 0  30px
          display flex 
          flex-wrap wrap 
        .topicId
          display flex
          width 1575px      
        




      
 
</style>
