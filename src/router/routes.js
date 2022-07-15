
// import index from '@/views/blogIndex.vue'
// import blogindex from '@/views/myIndex'
import index from '@/views/index.vue'
import blogIndex from '@/views/myIndex'
import growthProcess from '@/views/growthProcess'
import bookList from '@/views/bookList'
import about from '@/views/about'
import leaveWord from '@/views/leaveWord'

const routes = [
    {
        path: '/',
        name: 'index',
        component: index,
        children: [
            {
                path: '/',
                component: blogIndex
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
            },
            {
                path: '/leaveWord',
                name: 'leaveWord',
                component: leaveWord
            },
        ]
    }
]

export default routes;
