<template>
  <div class="view-github container">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="border-bottom">User information:</h1>
      <router-link to="/" class="lead">Home page</router-link>
    </div>
    <div class="card mb-3" style="max-width: 100%;" v-for="(user,index) in filterUser" :key="index" >
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="randomImage" class="card-img" alt="Profile image">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{user.fullName}}</h5>
            <p class="card-text">Balance: {{user.balance}}</p>
            <p class="card-text">Registered: {{user.registered}}</p>
            <p class="card-text">State: {{user.name}}</p>
            <p class="card-text">Country: {{user.country}}</p>
            <p class="card-text">Activ status: <b>{{user.isActive}}</b></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'user',
  data () {
    return {
      userID: this.$route.params.user_id,
      allUsers: [],
      randomImage: ''
    }
  },
  computed:{
    ...mapGetters(['allUsersSorted']),
    filterUser(){
      this.allUsers = this.allUsersSorted;
      let printUser = this.allUsers.filter((user) => user.id == this.userID);
      return printUser
    }
  },
  methods:{
    updateId(){
      this.githubID = this.$route.params.project_id
      this.githubParams = this.$route.params
      console.log(this.githubID);
    }
  },
  watch:{
    $route:'updateId'
  },
  beforeCreate(){
    axios.get('https://randomuser.me/api/').then(response => (this.randomImage = response.data.results[0].picture.large))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
