<template>
  <div id="app" class="container">
    <h1 class="border-bottom">Big JSON</h1>
    <pagination></pagination>
    <search></search>
    <div class="row">
      <router-view/>
    </div>
  </div><!-- #app .container -->
</template>

<script>
import Pagination from './components/Pagination.vue'
import Search from './components/Search.vue'

export default {
  name: 'App',
  components:{
    Pagination,
    Search
  }
}
</script>

<style>

</style>
