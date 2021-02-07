<template>
  <div class="home container">
    <div class="mr-2">
      <select class="form-control mr-1 selectStatus clickable" v-model="pageSize" @click="updateVisibleUsersHome" >
        <option v-bind:value="50">50 per page</option>
        <option v-bind:value="100">100 per page</option>
        <option v-bind:value="200">200 per page</option>
        <option v-bind:value="500">500 per page</option>
        <option v-bind:value="1000">1000 per page</option>
        <option v-bind:value="5000">5000 per page</option>
      </select>
    </div><!-- mr-2 -->
    <hr>
    <Pagination 
        v-on:page-update="updatePageHome"

        v-bind:currentPage="currentPage"
        v-bind:pageSize="pageSize"
    />
    <Search />
    <div class="row">
      <div class="col-12">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col" class="clickable" @click="sortName">
                Full Name 
                <i class=" fas" :class="{'fa-sort-alpha-down' : !sortOrderName,'fa-sort-alpha-up': sortOrderName }"></i>
              </th>
              <th scope="col" class="clickable" @click="sortBalance">
                Balance 
                <i class=" fas " :class="{'fa-sort-amount-down' : !sortOrderBalance,'fa-sort-amount-up': sortOrderBalance }"></i>
              </th>
              <th scope="col" class="clickable" @click="sortActive">
                Active 
                <i class=" fas " :class="{'fa-toggle-on' : !sortOrderActive,'fa-toggle-off': sortOrderActive }"></i>
              </th>
              <th scope="col" class="clickable" @click="sortRegistered">
                Registered 
                <i class=" fas " :class="{'fa-sort-numeric-up' : !sortOrderRegistraded,'fa-sort-numeric-down': sortOrderRegistraded }"></i>
              </th>
              <th scope="col" class="clickable" @click="sortState">
                State 
                <i class=" fas " :class="{'fa-sort-alpha-down' : !sortOrderState,'fa-sort-alpha-up': sortOrderState }"></i>
              </th>
              <th scope="col" class="clickable" @click="sortCountry">
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
import Pagination from './Pagination.vue'
import Search from './Search.vue'
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      sortOrderName: false,
      sortOrderBalance: false,
      sortOrderActive: false,
      sortOrderRegistraded: false,
      sortOrderState: false,
      sortOrderCountry: false,
      currentPage: 0,
      pageSize: 200,
      visibleUsers: []
    }
  },
  components:{
    Pagination,
    Search
  },
  computed: {
    ...mapGetters(['allUsersSorted']),
  },
  methods:{
    userInfo(item){
      console.log(item);
    },
    ...mapMutations(['sortByName','sortByBalance','sortByActive','sortByState','sortByRegistered','sortByCountry','updatePage','updateVisibleUsers']),
    sortName(){
      this.sortByName();
      this.sortOrderName = !this.sortOrderName;
    },
    sortBalance(){
      this.sortByBalance();
      this.sortOrderBalance = !this.sortOrderBalance;
    },
    sortActive(){
      this.sortByActive();
      this.sortOrderActive = !this.sortOrderActive;
    },
    sortState(){
      this.sortByState();
      this.sortOrderState = !this.sortOrderState;
    },
    sortRegistered(){
      this.sortByRegistered();
      this.sortOrderRegistraded = !this.sortOrderRegistraded;
    },
    sortCountry(){
      this.sortByCountry();
      this.sortOrderCountry = !this.sortOrderCountry;
    },
    updatePageHome(pageNumber){
      this.updatePage(pageNumber);
    },
    updateVisibleUsersHome(){
      this.updateVisibleUsers(this.pageSize);
    }
    // updatePage(pageNumber) {
    //   this.currentPage = pageNumber;
    //   this.updateVisibleUsers();
    // },
    // updateVisibleUsers() {
    //   this.visibleUsers = this.allUsersSorted.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);

    //   // if we have 0 visible todos, go back a page
    //   if (this.visibleUsers.length == 0 && this.currentPage > 0) {
    //     this.updatePage(this.currentPage -1);
    //   }
    // },
  },
  beforeCreate() {
    // We are calling posts on beforeMounted
    this.$store.dispatch("getPosts");
  },
  mounted(){
    this.updateVisibleUsersHome()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
