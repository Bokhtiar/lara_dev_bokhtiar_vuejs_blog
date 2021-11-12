import axios from "axios"

export default{
    actions:{
        getCategoryList(context){
            axios.get('/admin/category/index').then((response)=>{
                context.commit('categoryList',response.data.category)
            })
        }
    },

    mutations:{
        categoryList(state,responseData){
            return state.category = responseData
        }
    },

    state:{
        category:[],
    },
    
    getters:{
        getCategory(state){
            return state.category
        }
    },


}
