<template>
  <div v-if="totalPages() > 0" class="pagination-wrapper text-center">
    <span v-if="showPreviousLink()" class="pagination-btn" v-on:click="updatePage(currentPage - 1)"> &lsaquo; </span>
    {{ currentPage + 1 }} of {{ totalPages() }}
    <span v-if="showNextLink()" class="pagination-btn" v-on:click="updatePage(currentPage + 1)"> 	&rsaquo; </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'pagination',
  props: ['currentPage', 'pageSize'],
  methods: {
    ...mapGetters(['allUsersSorted']),
    updatePage(pageNumber) {
      this.$emit('page-update', pageNumber);
    },
    totalPages() {
      return Math.ceil(this.allUsersSorted.length / this.pageSize);
    },
    showPreviousLink() {
      return this.currentPage == 0 ? false : true;
    },
    showNextLink() {
      return this.currentPage == (this.totalPages() - 1) ? false : true;
    }
  }
}

</script>
<style>
.pagination-btn {
  cursor: pointer;
}
</style>
