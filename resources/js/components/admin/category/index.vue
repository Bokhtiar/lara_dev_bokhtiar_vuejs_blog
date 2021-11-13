<template>
    <div class="container">
        <div class="card">
            <div class="card-header justify-content-between d-flex">
                <h3 class="">List Of Category</h3>
                <router-link to="/category/add" href>Add Category</router-link>
            </div>
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Index</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(category,index) in getCategoryList" :key="category.id">
                            <th scope="row">{{ index +1 }}</th>
                            <td>{{ category.category_name }}</td>
                            <td><router-link :to=" `/edit/category/${category.id}` ">Edit</router-link> <a @click.prevent ="categoryDelete(category.id)"  href="">Delete</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    mounted() {
        this.$store.dispatch('getCategoryList')
    },
    computed:{
        getCategoryList(){
            return this.$store.getters.getCategory
        }
    },
    methods:{
        categoryDelete(id){
            axios.get('/admin/category/delete/'+id).then((response)=>{
                console.log(response);
                this.$store.dispatch('getCategoryList')
            })
        }
    }
}
</script>
