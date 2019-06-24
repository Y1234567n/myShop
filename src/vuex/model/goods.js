import {reqDiscoverNav,reqRecommend} from '../../api'
const state = {
  discoverNav:[],
  RecommendData:[]
}


const actions = {
  async getDiscoverNav ({commit}){
      const result = await reqDiscoverNav()     
      console.log(result)
      if(result.code==='200'){
        commit('getNav',result.data)
      }          
    },
    async getDiscover ({commit}){
      const result = await reqRecommend()     
      console.log(result)
      if(result.code==='200'){
        commit('getRecommendData',result.data)
      }          
    },
}

const mutations = {
  getNav (state,data){
    state.discoverNav = data
  },
  getRecommendData (state,data){
    this.Arr = []
    data.forEach(item => {
      this.Arr = [... this.Arr ,...item.topics]
    });
    console.log(this.Arr)
    state.RecommendData = this.Arr
  }
 
}

// const gettersFun = 'policyDescList'||'myMoked'||'personalShop'||'component'||'flashSaleModule'||'popularItemList'||'newItemList'||'topicList'

const getters = {
  // RecommendDataAll(state){
  //   this.Arr
  //   state.RecommendData.forEach(item => {
  //     this.Arr = [ ...item.topics]
  //   });

  //   return  this.Arr
  // },
 
}

export default {
  state,
  actions,
  mutations,
  getters
}