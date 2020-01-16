/*
 * @Author: your name
 * @Date: 2020-01-08 10:28:43
 * @LastEditTime: 2020-01-16 11:25:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /myblog/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/app/blogIndex.vue'
import blogindex from '@/app/myIndex'
import growthProcess from '@/app/growthProcess'
import bookList from '@/app/bookList'
import about from '@/app/about'
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
