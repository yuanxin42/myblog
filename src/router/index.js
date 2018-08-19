import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/blogIndex'
import blogindex from '@/components/myIndex'
import diary from '@/components/diary'
import myfeel from '@/components/myfeel'
import allComponents from '@/components/allComponents'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: 'index',
          component: blogindex
        },
        {
          path: 'diary',
          component: diary
        },
        {
          path: 'allComponents',
          component: allComponents
        },
        {
          path: 'myfeel',
          component: myfeel
        },
        {
          path: '4',
          component: allComponents
        }
      ]
    }
  ]
})
