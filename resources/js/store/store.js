import axios from "axios"

export default{
    actions:{
        getCategoryList(context){
            axios.get('/admin/category/index').then((response)=>{
                context.commit('categoryList',response.data.category)
            })
        },
        getBlogList(context){
            axios.get('/admin/blog/index').then((response)=>{
                context.commit('blogList', response.data.blog)
            })
        }
    },

    mutations:{
        categoryList(state,responseData){
            return state.category = responseData
        },
        blogList(state, responseData){
            return state.blog = responseData
        }
    },

    state:{
        category:[],
        blog:[],
    },

    getters:{
        getCategory(state){
            return state.category
        },
        getBlog(state){
            return state.blog
        }
    },


}
