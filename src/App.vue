<template>
  <div id="app" class="container">
    <h1 class="border-bottom">FACTORY WORLD WIDE</h1>
    <pagination></pagination>
    <div class="row">
      <router-view/>
    </div>
  </div><!-- #app .container -->
</template>

<script>
import Pagination from './components/Pagination.vue'

export default {
  name: 'App',
  components:{
    Pagination
  }
}
</script>

<style>

</style>
