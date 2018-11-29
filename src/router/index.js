import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/blogIndex.vue'
import blogindex from '@/components/myIndex'
import growthProcess from '@/components/growthProcess'
import bookList from '@/components/bookList'
import about from '@/components/about'
Vue.use(Router)

export default new Router({
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
          path: '/growthProcess',
          name: 'growthProcess',
          component: growthProcess
        },
        {
          path: '/bookList',
          name: 'bookList',
          component: bookList
        },
        {
          path: '/about',
          name: 'about',
          component: about
        }
      ]
    }
  ]
})
