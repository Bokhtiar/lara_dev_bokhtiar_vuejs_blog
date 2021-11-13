<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div class="card-title d-flex justify-content-between">
                    <h4 class="">Update Blog</h4>
                    <router-link class="btn btn-primary" to="/blog">List of Blog</router-link>
                </div>
                <div class="card-body">
                    <form  @submit.prevent="blogUpdate" enctype="multipart/form-data" class="form-gorup" >
                        <div class="row">
                            <div class="col-sm-12 col-lg-6 col-mg-6">
                                <div class="form-gorup">
                                    <label for="">Blog Title <span class="text-danger">*</span></label>
                                    <input class="form-control" type="text" v-model="title" placeholder="title type here">
                                </div>
                            </div>

                            <div class="col-sm-12 col-lg-6 col-mg-6">
                                    <div class="form-gorup">
                                    <label for="">Select Categor <span class="text-danger">*</span></label>
                                    <select name="category_id" class="form-control" v-model="category_id" id="">
                                        <option value="">Select Category</option>
                                        <option v-for="category in categories" :key="category.id" :value="category.id">{{category.category_name}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">Select Thumbnail Image</label>
                             <input type="file" class="form-control" v-on:change="onImageChange" name="image" id="">
                        </div>

                        <div class="form-gorup">
                            <label for="">Short Description</label>
                            <textarea class="form-control" name="short_descripton" v-model="short_description" id="" cols="10" rows="4"></textarea>
                        </div>
                        <div class="form-gorup mt-3">
                            <label for="">Description</label>
                            <textarea class="form-control" name="descripton" v-model="description" id="" cols="15" rows="6"></textarea>
                        </div>

                        <div class="form-gorup float-right mt-3" >
                            <input type="submit" name="" value="Submit" class="btn btn-primary" id="">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
data()
    {
        return {
            title: '',
            image: '',
            category_id:'',
            short_description:'',
            description:'',
        };
    },
 mounted(){
    this.$store.dispatch('getCategoryList'),
    this.editBlog()
 },
 computed:{
     categories(){
        return this.$store.getters.getCategory
    }
 },

  methods: {
      //blog edit
      editBlog(){
          axios.get('/admin/blog/edit/'+this.$route.params.id).then((response)=>{
              this.title = response.data.blog.title
              this.category_id = response.data.blog.category_id
              this.short_description = response.data.blog.short_description
              this.description = response.data.blog.description
              this.image = response.data.blog.image
          })
      },


    onImageChange(e){
        console.log(e.target.files[0]);
        this.image = e.target.files[0];
    },
    blogUpdate(e) {
        e.preventDefault();
        let currentObj = this;
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        let formData = new FormData();
        formData.append('title', this.title);
        formData.append('image', this.image);
        formData.append('category_id', this.category_id);
        formData.append('short_description', this.short_description);
        formData.append('description', this.description);
        axios.post('/admin/blog/update/'+this.$route.params.id, formData, config)
        .then((response) => {
            console.log(response)
            this.$router.push('/blog');
        })
        .catch(function (error) {
            currentObj.output = error;
        });
    },



  },
  ready() {

         $('#summernote').summernote({
            height: 400,
            placeholder: 'techsolutionstuff.com',
        });

    }
}
</script>
