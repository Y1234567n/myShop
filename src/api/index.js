import ajax from './ajax'
获取搜索框内商品数量
export const reqSearchNub = ajax('http://m.you.163.com/xhr/search/getTotalNumbersOfProducts.json')