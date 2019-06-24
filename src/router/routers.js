import Home from '../pages/Home'
import Classify from '../pages/Classify'
import IdentifyGoods from '../pages/Identify-goods'
import ShoppingTrolley from '../pages/Shopping-trolley'
import Search from '../pages/Search'
import My from '../pages/My'
import ShoppingDiscover from '../pages/Identify-goods/discover.vue'
import ShoppingSelect from '../pages/Identify-goods/select.vue'
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
    meta: 'isShow',
    children:[{
      path: '/shopping/discover',
      component: ShoppingDiscover,
      meta: 'isShow'
    },{
      path: '/shopping/select',
      component: ShoppingSelect,
      meta: 'isShow'
    }, {
      path: '/identify',
      redirect:'/shopping/discover'
    }
  ]
  },{
    path: '/shopping',
    component: ShoppingTrolley,
    meta: 'isShow',
  },{
    path: '/my',
    component: My,
    meta: '', 
  },{
    path: '/se arch',
    component: Search,
    meta: ''
  },
  {
    path: '/',
    redirect: '/home'
  }

]
