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
