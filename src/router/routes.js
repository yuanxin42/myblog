
// import index from '@/views/blogIndex.vue'
// import blogindex from '@/views/myIndex'
import index from '@/views/index.vue'
import blogindex from '@/views/myIndex'
import growthProcess from '@/views/growthProcess'
import bookList from '@/views/bookList'
import about from '@/views/about'

const routes = [
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

export default routes;
