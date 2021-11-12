<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div class="justify-content-between d-flex">List Of Category</div>
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
                            <td><router-link :to=" `/edit/category/${category.id}` ">Edit</router-link> <a href="">Delete</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$store.dispatch('getCategoryList')
    },
    computed:{
        getCategoryList(){
            return this.$store.getters.getCategory
        }
    }
}
</script>
