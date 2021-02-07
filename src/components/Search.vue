<template>
  <div class="d-flex mb-2">
    <input type="text" class="form-control mr-1 filterName" v-on:keyup="filterByName(searchName)" v-model="searchName.text" placeholder="Name exp: Allyson">
    <input type="text" class="form-control mr-1 filterBalance" v-on:keyup="filterByName(searchBalance)" v-model="searchBalance.text" placeholder="Balance exp: 2,972.88">
    <select class="form-control mr-1 selectStatus" v-on:change="filterByName(isActive)" v-model="isActive" >
      <option v-bind:value="{id: 6, text: 'all'}">Both</option>
      <option v-bind:value="{id: 6, text: true}">Active</option>
      <option v-bind:value="{id: 6, text: false}">Not Active</option>
    </select>
    <input type="date" class="form-control mr-1 filterDate" v-on:change="filterByName(searchDate)" v-model="searchDate.text" placeholder="Reg. exp: 2014-02-22T12:35:59">
    <input type="text" class="form-control mr-1 filterState" v-on:keyup="filterByName(searchState)" v-model="searchState.text" placeholder="State exp: Colorado">
    <input type="text" class="form-control filterCountry" v-on:keyup="filterByName(searchCountry)" v-model="searchCountry.text" placeholder="State exp: Cyprus">
  </div><!-- d-flex -->
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name:'Search',
  data(){
    return {
      searchName: {id: 1,text: ''},
      searchBalance: {id: 2,text: ''},
      searchDate: {id: 3,text: ''},
      searchState: {id: 4,text: ''},
      searchCountry: {id: 5,text: ''},
      isActive: {id: 6, text: 'all'}
    }
  },
  computed:{
    // filteredUser(){
    //   var pickSearch = this.searchOption();
    //   // this.$state.dispatch('filterUser')
    //   // console.log(this.$state.actions.filteredUser)
    // }
  },
  methods:{
    ...mapActions(['filterUser']),
    filterByName(pickSearch){
      this.filterUser(pickSearch)
    }
    // searchOption(){
    //   if(this.searchName != ''){
    //     return {
    //       name: this.searchName.toLowerCase(),
    //       option: 'fullName'
    //     };
    //   } else if(this.searchBalance != ''){
    //     return {
    //       name: this.searchBalance,
    //       option: 'balance'
    //     };
    //   } else if(this.searchState != ''){
    //     return {
    //       name: this.searchState.toLowerCase(),
    //       option: 'state'
    //     };
    //   } else if(this.searchCountry != ''){
    //     return {
    //       name: this.searchCountry.toLowerCase(),
    //       option: 'country'
    //     };
    //   } else if(this.searchDate != ''){
    //     return {
    //       name: this.searchDate,
    //       option: 'registered'
    //     };
    //   } else if(this.isActive == 'all' || this.isActive == true || this.isActive == false){
    //     return {
    //       name: this.isActive,
    //       option: 'isActive'
    //     };
    //   }
    // }
  }
}
</script>

<style>

</style>