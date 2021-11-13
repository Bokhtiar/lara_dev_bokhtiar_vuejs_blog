import AdminHome from './components/admin/AdminHome.vue'
import CategoryList from './components/admin/category/index.vue'
export const routes = [
    {
        path:'/',
        component: () => import('./components/user/UserHome.vue'),
    },
    {
        path:'/about',
        component: () => import('./components/user/about.vue'),
    },
    {
        path:'/blog/list',
        component: () => import('./components/user/blog/index.vue'),
    },
    //admin
    {
        path:'/admin/dashboard',
        component:AdminHome
    },
    {
        path:'/category',
        component:CategoryList
    },
    {
        path:'/category/add',
        component: () => import('./components/admin/category/create.vue'),
    },
    {
        path:'/edit/category/:id',
        component: () => import('./components/admin/category/edit.vue'),
    },
    {
        path:'/blog',
        component: () => import('./components/admin/blog/index.vue'),
    },
    {
        path:'/blog/create',
        component: () => import('./components/admin/blog/create.vue'),
    },
    {
        path:'/blog/edit/:id',
        component: () => import('./components/admin/blog/edit.vue'),
    },


  ]
