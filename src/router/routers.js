import Home from '../pages/Home'
import Classify from '../pages/Classify'
import IdentifyGoods from '../pages/Identify-goods'
import ShoppingTrolley from '../pages/Shopping-trolley'
import My from '../pages/My'
export default [
  {
    path: '/home',
    component: Home,
    meta: 'isShow'
  },{
    path: '/classifyme',
    component: Classify,
    meta: 'isShow'
  },{
    path: '/identify',
    component: IdentifyGoods,
    meta: 'isShow'
  },{
    path: '/shopping',
    component: ShoppingTrolley,
    meta: 'isShow'
  },{
    path: '/my',
    component: My,
    meta: ''
  },{
    path: '/',
    redirect: '/home'
  }

]
