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


  ]
