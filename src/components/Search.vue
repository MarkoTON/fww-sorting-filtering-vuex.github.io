<template>
  <div class="d-flex mb-2">
    <input type="text" class="form-control mr-1 filterName" v-model="searchName" placeholder="Name exp: Allyson">
    <input type="text" class="form-control mr-1 filterBalance" v-model="searchBalance" placeholder="Balance exp: 2,972.88">
    <select class="form-control mr-1 selectStatus" v-model="isActive" >
      <option v-bind:value="'all'">Both</option>
      <option v-bind:value="true">Active</option>
      <option v-bind:value="false">Not Active</option>
    </select>
    <input type="date" class="form-control mr-1 filterDate" v-model="searchDate" placeholder="Reg. exp: 2014-02-22T12:35:59">
    <input type="text" class="form-control mr-1 filterState" v-model="searchState" placeholder="State exp: Colorado">
    <input type="text" class="form-control filterCountry" v-model="searchCountry" placeholder="State exp: Cyprus">

<button @click="filterUser">zdghvs</button>
    <div>
{{filteredUser}}
    </div>
  </div><!-- d-flex -->
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name:'Search',
  data(){
    return {
      searchName: '',
      searchBalance: '',
      searchDate: '',
      searchState: '',
      searchCountry: '',
      isActive: 'all'
    }
  },
  computed:{
    filteredUser(){
      var pickSearch = this.searchOption();
      // this.$state.dispatch('filterUser')
      // console.log(this.$state.actions.filteredUser)
    }
  },
  methods:{
    ...mapActions(['filterUser']),
    searchOption(){
      if(this.searchName != ''){
        return {
          name: this.searchName.toLowerCase(),
          option: 'fullName'
        };
      } else if(this.searchBalance != ''){
        return {
          name: this.searchBalance,
          option: 'balance'
        };
      } else if(this.searchState != ''){
        return {
          name: this.searchState.toLowerCase(),
          option: 'state'
        };
      } else if(this.searchCountry != ''){
        return {
          name: this.searchCountry.toLowerCase(),
          option: 'country'
        };
      } else if(this.searchDate != ''){
        return {
          name: this.searchDate,
          option: 'registered'
        };
      } else if(this.isActive == 'all' || this.isActive == true || this.isActive == false){
        return {
          name: this.isActive,
          option: 'isActive'
        };
      }
    }
  }
}
</script>

<style>

</style>