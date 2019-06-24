import {reqSearchNub,reqMkHome,reqHotKword} from '../../api'
import {GETSHOPNUM,GETNAVSIX,GETINPUTKEYDOWN} from '../vuex-const'
const state = {
 shopNO: 0,
 homeData:{},
//  搜索页面热搜词汇
 hotKeyDown:'请输入关键字搜索',
 hotKeyword:[]
}

const actions = {
  // 获取头部好品数量
  async getshopNUM ({commit}){
      const result = await reqSearchNub()     
      if(result.code==='200'){
       commit(GETSHOPNUM,result.data)
      }     
    },
    // 获取home总数据
  async getHomeData ({commit}){
    const result = await reqMkHome()
    if(result.code===0){
      commit(GETNAVSIX,result.data)
    }
  },
  // 获取热搜总数据
  async getInpotKeyDown({commit}){
    const result = await reqHotKword()  
      commit(GETINPUTKEYDOWN,result.data)
  }


}

const mutations = {
    // 获取头部好品数量
  [GETSHOPNUM] (state,data){
   state.shopNO = data
  },
  // home总数据
  [GETNAVSIX] (state,data){
    state.homeData = data
    // state.policyDescList = data.policyDescList

  },
  // 热搜和热搜关键字列表
  [GETINPUTKEYDOWN](state,data){
    state.hotKeyDown = data.defaultKeyword.keyword
    state.hotKeyword = data.hotKeywordVOList
  }
}

// const gettersFun = 'policyDescList'||'myMoked'||'personalShop'||'component'||'flashSaleModule'||'popularItemList'||'newItemList'||'topicList'

const getters = {
  kingKongList (state){
    return state.homeData.kingKongModule?state.homeData.kingKongModule.kingKongList:[]
  },
  // [gettersFun] () {
  //   return state.homeData[gettersFun]||[]
  // },
  policyDescList (state){
    return state.homeData.policyDescList||[]
  },
  sceneLightShoppingGuideModule (state){
    return state.homeData.sceneLightShoppingGuideModule||[]
  },
  myMoked(state){
    return state.homeData.myMoked||[]
  },
  personalShop(state){
    return state.homeData.personalShop||[]
  },
  component(state){
    return state.homeData.component||[]
  },
  flashSaleModule(state){
    return state.homeData.flashSaleModule||[]
  },
  popularItemList(state){
    return  state.homeData.popularItemList||[]
  },
  newItemList(state){
    return  state.homeData.newItemList||[]
  },
  topicList(state){
    return  state.homeData.topicList||[]
  },
  categoryModule(state){
    return  state.homeData.categoryModule||[]
  },
  zhongChouList(state){
    return state.homeData.zhongChouList||[]

  }
}

export default {
  state,
  actions,
  mutations,
  getters
}