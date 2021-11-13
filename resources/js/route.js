import AdminHome from './components/admin/AdminHome.vue'
import CategoryList from './components/admin/category/index.vue'
export const routes = [
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
        component: () => import('./components/admin/blog/create.vue'),
    },


  ]
