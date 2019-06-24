<template>
 <div class="discover">
  <nav class="header-nav" ref="scrollbars">
    <ul class="nav-list"> 
      <li class="nav-item" v-for="(item, index) in discoverNav" :key="index"  :class="{active:isBorder===index}" @click="isBorder = index">
        <span class="nav-item-text">{{item.tabName}}</span>
      </li>
    </ul>
  </nav>
  <div class="discover-content">
    <list-pull-loading :options="options" ref="listPullLoading">
        <template slot="list">
        <div class="discover-recommend" v-for="(item, index) in RecommendData" :key="index">
          <div class="title" :class="{active:item.style===2}">
            <img :src="item.avatar" alt="">
            <span>{{item.nickname}}</span>
          </div>
          <p class="text"  :class="{active:item.style===2}" >
           {{item.title}}
          </p>
          <div class="img" :class="{active:item.style===2}">
            <img :src="item.picUrl" alt="" class="bigImg">
          </div>
          <p class="look">
          <span class="iconfont icon-xiangyoujiantou"></span>
          &nbsp;&nbsp;
            <span>{{item.readCount>=10000?Math.round((item.readCount/10000) * 100) / 100+'w':item.readCount}}人看过</span>
          </p>
        </div>
   	  </template>
  	</list-pull-loading> 
  </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import IScroll from "iscroll"
	import {listPullLoading} from 'list-pull-loading'
  import "list-pull-loading/dist/list-pull-loading.css"
 export default {
  components:{
      "list-pull-loading": listPullLoading
  },
   data() {
    return {
      isBorder: 0, 
      options: {
					auto: true,
          parameters: {typeId: null,maxResultCount: 5, skipCount: 0},         
					down: {
						offset: 50
					},
					api: this.queryList
				}, // 上拉下拉列表组件选项配置    
    }
  },
  async mounted(){   
    this.$store.dispatch('getDiscoverNav')
    await  this.$store.dispatch('getDiscover')
    this.$nextTick(()=>{
    	this.typeScroll = new IScroll(this.$refs["scrollbars"], {
						scrollX: true,
            scrollY: false
          })
    })
  },
  computed:{
    ...mapState({
      discoverNav:(state)=>state.goods.discoverNav,
      RecommendData: (state)=>state.goods.RecommendData
    })
  },
  methods:{
    queryList(parameters, isLoadingMore){
				var _this = this;
				return new Promise((resolve, reject) => {
					setTimeout(function(){
						let end = (_this.RecommendData.length > parameters.skipCount + parameters.maxResultCount) ? parameters.skipCount + parameters.maxResultCount:_this.RecommendData.length;
						if(isLoadingMore) {
							_this.dataList.push(..._this.RecommendData.slice(parameters.skipCount, end));
						} else {
							_this.dataList = _this.RecommendData.slice(parameters.skipCount, end);
						}
						resolve(end - parameters.skipCount);
					}, 500);
				});
			}
  }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.discover
  width 100%
  height 100%
  overflow hidden
  position relative
  .header-nav
    height 80px
    width 100%
    background-color #fff
    touch-action none
    position absolute
    left 0
    top 0
    .nav-list
      background-color #fff
      touch-action: none;
      padding-left 40px
      height 100%
      width 980px
      .nav-item
        float left
        height 100%
        padding  0 16px
        line-height 80px
        text-align center
        &.active  
          box-sizing border-box
          color red
          border-bottom  3px solid #f00
        .nav-item-text
          font-size 32px
  .discover-content
    box-sizing border-box
    padding-top 80px
    height 100%
    .discover-recommend
      width 100%
      box-sizing border-box
      margin 25px 0
      padding 45px 36.5px
      background-color #ffffff
      .title
        height 70px
        margin-bottom 30px
        line-height 70px
        img
          width 67px
          height 67px
          border-radius 50%
          margin-right 30px
        span 
          line-height 70px
          font-size 35px
      .text
        font-size 50px
        word-break:break-all
      .img
        width 100%
        img 
          height 470px
          // width 800px
          border-radius 18px
      .look
        height 41px
        line-height 41px
        margin-top 20px
      .active
        width 500px
        .bigImg 
          width 340px
          height 340px
 
</style>
