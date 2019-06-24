import ajax from './ajax'
const BAST='/api'
//获取搜索框内商品数量
export const reqSearchNub = ()=> ajax(BAST+'/xhr/search/getTotalNumbersOfProducts.json')
 //获取Mock的home数据
export const reqMkHome =() =>ajax('/mock/home')
//获取Mock的分类数据
export const reqMkCategory =()=>ajax('/mock/category')
//获取分类列表数据
export const reqMkCategoryist =()=>ajax('/mock/category/list')
// 获取热搜关键字
export const reqHotKword = ()=>ajax(BAST+'/xhr/search/init.json')
// 根据用户输入内容模糊匹配
export const reqSearch = (keywordPrefix)=>ajax(BAST+'/xhr/search/searchAutoComplete.json',{keywordPrefix})

export const reqDiscoverNav =()=>ajax(BAST+'topic/v1/find/getTabs.json')

export const reqRecommend = ()=>ajax(BAST+'topic/v1/find/recManual.json')