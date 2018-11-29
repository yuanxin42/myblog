import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/blogIndex.vue'
import blogindex from '@/components/myIndex'
import growthProcess from '@/components/growthProcess'
import bookList from '@/components/bookList'
import about from '@/components/about'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          component: blogindex
        },
        {
          path: 'growthProcess',
          component: growthProcess
        },
        {
          path: 'bookList',
          component: bookList
        },
        {
          path: 'about',
          component: about
        }
      ]
    }
  ]
})
