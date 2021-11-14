<template>
    <div>

    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Blog</h2>
          <ol>
            <li><router-link to="/">Home</router-link></li>
            <li>Blog</li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs -->

    <!-- ======= Blog Section ======= -->
    <section id="blog" class="blog">
      <div class="container" data-aos="fade-up">

        <div class="row">

          <div class="col-lg-8 entries">

            <article v-for="blog in blogs" :key="blog.id" class="entry">

              <div class="entry-img">
                <img :src="imgurl(blog.image)" alt="" class="img-fluid">
              </div>

              <h2 class="entry-title">
                <a href="blog-single.html">{{ blog.title }}</a>
              </h2>

              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-single.html">John Doe</a></li>
                  <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                  <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li>
                </ul>
              </div>

              <div class="entry-content">
                <p>
                  {{ blog.short_description }}
                </p>
                <div class="read-more">
                  <router-link :to="`/blog/detail/${blog.id}`">Read More</router-link>
                </div>
              </div>

            </article><!-- End blog entry -->
            <div class="blog-pagination">
              <ul class="justify-content-center">
                <li><a href="#">1</a></li>
                <li class="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
              </ul>
            </div>

          </div><!-- End blog entries list -->

          <div class="col-lg-4">

            <div class="sidebar">

              <h3 class="sidebar-title">Search</h3>
              <div class="sidebar-item search-form">
                <form action="">
                  <input type="text" v-model="keyword">
                  <button disabled type="submit"><i class="bi bi-search"></i></button>
                </form>
              </div><!-- End sidebar search formn-->



              <h3 class="sidebar-title">Recent Posts</h3>
              <div class="sidebar-item recent-posts">

                <div class="post-item clearfix" v-for="item in recentBlog" :key="item.id">
                  <img :src="imgurl(item.image)" alt="">
                  <h4><router-link :to="`/blog/detail/${item.id}`">{{ item.title }}</router-link></h4>
                  <time datetime="2020-01-01">{{ item.created_at }}</time>
                </div>
              </div><!-- End sidebar recent posts-->

              <h3 class="sidebar-title">Categories</h3>
              <div class="sidebar-item categories">
                <ul>
                  <li v-for="category in categories" :key="category.id" ><a @click="categoryWaysBlog(category.id)" >{{ category.category_name }} <span>(25)</span></a></li>

                </ul>
              </div><!-- End sidebar categories-->

              <h3 class="sidebar-title">Tags</h3>
              <div class="sidebar-item tags">
                <ul>
                  <li><a href="#">App</a></li>
                  <li><a href="#">IT</a></li>
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Mac</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Office</a></li>
                  <li><a href="#">Creative</a></li>
                  <li><a href="#">Studio</a></li>
                  <li><a href="#">Smart</a></li>
                  <li><a href="#">Tips</a></li>
                  <li><a href="#">Marketing</a></li>
                </ul>
              </div><!-- End sidebar tags-->

            </div><!-- End sidebar -->

          </div><!-- End blog sidebar -->

        </div>

      </div>
    </section><!-- End Blog Section -->
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            blogs:[],
            categories:[],
            recentBlog:[],
            keyword:'',
        }
    },
    mounted(){
        this.allBlog(),
        this.category(),
        this.recentBlogList()
    },
    watch: {
            keyword(after, before) {
                this.getSearch();
            }
        },
    methods:{
        imgurl(url){
          return  "http://localhost:8000/"+url
        },
        allBlog(){
            axios.get('/blog').then((response)=>{
                this.blogs = response.data.blog
            })
        },
        category(){
          axios.get('/category').then((response)=>{
            this.categories = response.data.category
          })
        },
        categoryWaysBlog(id){
            axios.get('/category/ways/blog/'+id).then((response)=>{
                this.blogs = response.data.blog
            })
        },
        recentBlogList(){
            axios.get('/recent/blog').then((response)=>{
                this.recentBlog = response.data.blog
            })
        },

        getSearch(){
            axios.get('/liveSearchBlog/'+this.keyword).then((response)=>{
                this.recentBlog = response.data.blog
            })
        }
    }
}
</script>
