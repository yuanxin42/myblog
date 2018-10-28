import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/blogIndex'
import blogindex from '@/components/myIndex'
import diary from '@/components/diary'
import myfeel from '@/components/myfeel'
import allComponents from '@/components/allComponents'
import details from '@/components/allComponents/details'
import compomentblock from '@/components/allComponents/compomentblock'
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
          path: 'index',
          component: blogindex
        },
        {
          path: 'diary',
          component: diary
        },
        {
          path: 'allComponents',
          component: allComponents,
          children: [
            {
              path: '/',
              component: compomentblock
            },
            {
              path: 'details',
              component: details
            }
          ]
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
