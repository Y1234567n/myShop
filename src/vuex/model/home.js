import {reqSearchNub,reqMkHome} from '../../api'
import {GETSHOPNUM,GETNAVSIX} from '../vuex-const'
const state = {
 shopNO: 0,
 homeData:{},
}

const actions = {
  async getshopNUM ({commit}){
      const result = await reqSearchNub()     
      if(result.code==='200'){
       commit(GETSHOPNUM,result.data)
      }     
    },
  async getHomeData ({commit}){
    const result = await reqMkHome()
    if(result.code===0){
      commit(GETNAVSIX,result.data)
    }
  }

}

const mutations = {
  [GETSHOPNUM] (state,data){
   state.shopNO = data
  },
  [GETNAVSIX] (state,data){
    state.homeData = data
    state.policyDescList = data.policyDescList

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
  myMoked(){
    return state.homeData.myMoked||[]
  },
  personalShop(){
    return state.homeData.personalShop||[]
  },
  component(){
    return state.homeData.component||[]
  },
  flashSaleModule(){
    return state.homeData.flashSaleModule||[]
  },
  popularItemList(){
    return  state.homeData.popularItemList||[]
  },
  newItemList(){
    return  state.homeData.newItemList||[]
  },
  topicList(){
    return  state.homeData.topicList||[]
  },
  categoryModule(){
    return  state.homeData.categoryModule||[]
  },
  zhongChouList(){
    return state.homeData.zhongChouList||[]

  }
}

export default {
  state,
  actions,
  mutations,
  getters
}