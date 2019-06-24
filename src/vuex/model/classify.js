import {reqMkCategory,reqMkCategoryist} from '../../api'
const state = {
 category:{},

}

const actions = {
  async getshopNUM ({commit}){
      const result = await reqMkCategory()     
      console.log(result)
      if(result.code===0){
        commit('getcategory',result.data)
      }

           
    },
}

const mutations = {
  getcategory (state,data){
    state.category = data
  },
 
}

// const gettersFun = 'policyDescList'||'myMoked'||'personalShop'||'component'||'flashSaleModule'||'popularItemList'||'newItemList'||'topicList'

const getters = {
  classifyNav(){
    return  state.category.categoryL1List||[]
  },
 
}

export default {
  state,
  actions,
  mutations,
  getters
}