<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    <p class="d-flex justify-content-between">Create WebSetting</p>
                    <router-link to="/setting">Show of WebSetting</router-link>
                </div>
                <div class="card-body">
                    <form action="" @submit.prevent="update">
                        <div class="form-group">
                            <label for="">Website Name:</label>
                            <input v-model="form.name" type="text" class="form-control" name="name" placeholder=" Name" minlength="2"  id="">
                            <div v-if="form.errors.has('name')" v-html="form.errors.get('name')" />
                        </div>

                        <div class="form-group">
                            <label for="">Website Phone:</label>
                            <input v-model="form.phone" type="text" class="form-control" name="phone" placeholder=" Phone" minlength="2"  id="">
                            <div v-if="form.errors.has('phone')" v-html="form.errors.get('phone')" />
                        </div>

                        <div class="form-group">
                            <label for="">Website E-mail:</label>
                            <input v-model="form.email" type="text" class="form-control" name="email" placeholder="E-mail" minlength="2"  id="">
                            <div v-if="form.errors.has('email')" v-html="form.errors.get('email')" />
                        </div>


                        <div class="form-group">
                            <label for="">Office Location:</label>
                            <input v-model="form.location" type="text" class="form-control" name="location" placeholder="Location" minlength="2"  id="">
                            <div v-if="form.errors.has('location')" v-html="form.errors.get('location')" />
                        </div>


                        <div class="form-group">
                            <label for="">Website Social Facebook Link:</label>
                            <input v-model="form.fb" type="text" class="form-control" name="fb" placeholder="fb link" minlength="2"  id="">
                            <div v-if="form.errors.has('fb')" v-html="form.errors.get('fb')" />
                        </div>


                        <div class="form-group">
                            <label for="">Website Social Instagram Link:</label>
                            <input v-model="form.insta" type="text" class="form-control" name="insta" placeholder="Instagram" minlength="2"  id="">
                            <div v-if="form.errors.has('insta')" v-html="form.errors.get('insta')" />
                        </div>


                        <div class="form-group">
                            <label for="">Website Social Twitter Link:</label>
                            <input v-model="form.twitter" type="text" class="form-control" name="twitter" placeholder="Twitter" minlength="2"  id="">
                            <div v-if="form.errors.has('twitter')" v-html="form.errors.get('twitter')" />
                        </div>

                        <div class="form-group">
                            <label for="">Website Social Linkdin Link:</label>
                            <input v-model="form.linkdin" type="text" class="form-control" name="linkdin" placeholder="linkdin" minlength="2"  id="">
                            <div v-if="form.errors.has('linkdin')" v-html="form.errors.get('linkdin')" />
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
  data: () => ({
    form: new Form({
        name:'',
        phone:'',
        email:'',
        location:'',
        fb:'',
        insta:'',
        linkdin:'',
        twitter:'',
    })
  }),

  methods: {
      //edit
      edit(){
          axios.get('/admin/setting/'+1).then((response)=>{

            this.form.name = response.data.web.name
            this.form.phone = response.data.web.phone
            this.form.email = response.data.web.email
            this.form.location = response.data.web.location
            this.form.fb = response.data.web.fb
            this.form.insta = response.data.web.insta
            this.form.linkdin = response.data.web.linkdin
            this.form.twitter = response.data.web.twitter
          })
      },
    async update () {
      this.form.post('/admin/setting/update/'+1).then(response =>{
        this.$router.push('/setting/'+1);
      })

    }
  },
  mounted(){
      this.edit()
  }
}
</script>
