<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col" class="clickable" @click="sortByName" v-on:click="sortOrderName = !sortOrderName">
                Full Name 
                <i class=" fas" :class="{'fa-sort-alpha-down' : !sortOrderName,'fa-sort-alpha-up': sortOrderName }"></i>
              </th>
              <th scope="col" class="clickable" @click="sortByBalance" v-on:click="sortOrderBalance = !sortOrderBalance">
                Balance 
                <i class=" fas " :class="{'fa-sort-amount-down' : !sortOrderBalance,'fa-sort-amount-up': sortOrderBalance }"></i>
              </th>
              <th scope="col" class="clickable" @click="sortByActive" v-on:click="sortOrderActive = !sortOrderActive" >
                Active 
                <i class=" fas " :class="{'fa-toggle-on' : !sortOrderActive,'fa-toggle-off': sortOrderActive }"></i>
              </th>
              <th scope="col" class="clickable" @click="sortByRegistered" v-on:click="sortOrderDate = !sortOrderDate">
                Registered 
                <i class=" fas " :class="{'fa-sort-numeric-up' : !sortOrderDate,'fa-sort-numeric-down': sortOrderDate }"></i>
              </th>
              <th scope="col" class="clickable" @click="sortByState" v-on:click="sortOrderState = !sortOrderState">
                State 
                <i class=" fas " :class="{'fa-sort-alpha-down' : !sortOrderState,'fa-sort-alpha-up': sortOrderState }"></i>
              </th>
              <th scope="col" class="clickable" @click="sortByCountry" v-on:click="sortOrderCountry = !sortOrderCountry" >
                Country 
                <i class=" fas " :class="{'fa-sort-alpha-down' : !sortOrderCountry,'fa-sort-alpha-up': sortOrderCountry }"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <router-link class="clickable" tag="tr" :to="{name: 'User', params: {user_id: item.id } }" @click="userInfo(item)" v-for="(item,index) in allUsersSorted" :key="item.id">
              <th scope="row">{{ index +1}}</th>
              <td>{{item.fullName}}</td>
              <td>{{item.balance}}</td>
              <td>{{item.isActive}}</td>
              <td>{{item.registered}}</td>
              <td>{{item.name}}</td>
              <td>{{item.country}}</td>
            </router-link>
          </tbody>
        </table>
      </div><!-- col-12 -->
    </div><!-- row -->
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      sortOrderName: false,
      sortOrderBalance: false,
      sortOrderActive: false,
      sortOrderState: false,
      sortOrderDate: false,
      sortOrderCountry: false
    }
  },
  computed: {
    ...mapGetters(['allUsersSorted']),
  },
  methods:{
    userInfo(item){
      console.log(item);
    },
    ...mapMutations(['sortByName','sortByBalance','sortByActive','sortByState','sortByRegistered','sortByCountry']),
  },
  beforeMount() {
    // We are calling posts on beforeMounted
    this.$store.dispatch("getPosts");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
