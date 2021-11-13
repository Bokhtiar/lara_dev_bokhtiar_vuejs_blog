<template>
    <div class="container">
        <div class="card">
            <div class="card-header justify-content-between d-flex">
                <h3 class="">List Of Blog</h3>
                <router-link to="/blog/create" href>Add Blog</router-link>
            </div>
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Index</th>
                            <th scope="col">Title</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(blog,index) in blogs" :key="blog.id">
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ blog.title }}</td>
                            <td>{{ blog.category.category_name }}</td>
                            <td>
                                <img :src="imgUrl(blog.image)" height="50px" width="50px" alt="">
                            </td>
                            <td>
                                <router-link :to=" `blog/edit/${blog.id} `" class="btn btn-sm btn-success">Edit</router-link>
                                <a @click="blogDelete(blog.id)" class="btn btn-sm btn-danger">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {

    mounted(){
        this.blogList()
    },
    computed:{
        blogs(){
            return this.$store.getters.getBlog
        }
    },
    methods:{
        imgUrl(url){
            return "http://localhost:8000/"+ url;
        },
        blogList(){
            this.$store.dispatch('getBlogList')
        },
        blogDelete(id){
            axios.get('/admin/blog/delete/'+id).then((response)=>{
                this.blogList();
            })
        }
    }
};
</script>
