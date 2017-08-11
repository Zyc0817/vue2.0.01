import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// 引入的四个页面
import Home from '@/components/Home'
import Explorer from '@/components/Explorer'
import Cart from '@/components/Cart'
import Me from '@/components/Me'
import Main from '@/components/Main'
import BookDetail from '@/components/BookDetail'
// 使用路由实例插件
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Main',
      path: '/',
      component: Main,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'explorer',
          name: 'Explorer',
          component: Explorer
        },
        {
          path: 'cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: 'me',
          name: 'Me',
          component: Me
        }
      ]
    },
    {name: 'BookDetail', path: '/books/:id', component: BookDetail}
  ]
})
