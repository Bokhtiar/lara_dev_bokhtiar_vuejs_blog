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
         <!-- ======= Blog Single Section ======= -->
    <section id="blog" class="blog">
      <div class="container" data-aos="fade-up">

        <div class="row">

          <div class="col-lg-8 entries">

            <article class="entry entry-single">

              <div class="entry-img">
                <img :src="imgurl(item.image)" alt="" class="img-fluid">
              </div>

              <h2 class="entry-title">
                <a href="blog-single.html">{{ item.title }}</a>
              </h2>

              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-single.html">John Doe</a></li>
                  <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>

                </ul>
              </div>

              <div class="entry-content">
                  {{ item.description }}
              </div>


            </article><!-- End blog entry -->
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

                <div class="post-item clearfix" v-for="blog in recentBlog" :key="blog.id">
                  <img :src="imgurl(blog.image)" alt="">
                  <h4><a @click="blogShow(blog.id)" >{{ blog.title }}</a></h4>
                  <time datetime="2020-01-01">{{ blog.created_at }}</time>
                </div>




              </div><!-- End sidebar recent posts-->

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
    </section><!-- End Blog Single Section -->
    </div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
      return {
          item:[],
          recentBlog:[],
          keyword:''
      }
  },
  watch:{
        keyword(after, before) {
            this.getSearch();
        }
    },
  methods:{
      imgurl(url){
         return  "http://localhost:8000/"+url
      },
      detail(){
          axios.get('/blog/show/'+this.$route.params.id).then((response)=>{
              this.item = response.data.blog
          })
      },
      recentBlogList(){
            axios.get('/recent/blog').then((response)=>{
                console.log(response)
                this.recentBlog = response.data.blog
            })
        },
        blogShow(id){
            axios.get('/blog/show/'+id).then((response)=>{
              this.item = response.data.blog
          })
        },
        getSearch(){
            axios.get('/liveSearchBlog/'+this.keyword).then((response)=>{
                this.recentBlog = response.data.blog
            })
        }
  },
  mounted(){
      this.detail(),
      this.recentBlogList()
  }
};
</script>
