<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    <p class="d-flex justify-content-between">Update Category</p>
                    <router-link to="/category">List of Category</router-link>
                </div>
                <div class="card-body">
                    <form action="" @submit.prevent="categoryUpdate">
                        <div class="form-group">
                            <label for="">Enter Category Name:</label>
                            <input v-model="form.category_name" type="text" class="form-control" name="category_name" placeholder="Category Nane" minlength="2" maxlength="30" id="">
                            <div v-if="form.errors.has('category_name')" v-html="form.errors.get('category_name')" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btn btn-primary float-right" name="" id="">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Form from 'vform'
import axios from 'axios'

export default {
    mounted(){
        axios.get('/admin/category/edit/'+this.$route.params.id).then((response)=>{
            this.form.category_name = response.data.category.category_name
        })
    },
  data: () => ({
    form: new Form({
      category_name: '',
    })
  }),

  methods: {
    async categoryUpdate () {
      this.form.post('/admin/category/update/'+this.$route.params.id).then(response =>{
        console.log(response.data)
        this.$router.push('/category');
      })

    }
  }
}
</script>
