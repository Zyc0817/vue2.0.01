<template>
    <div id="Explorer">
      <div v-text="bookID"></div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        bookID: ''
      }
    },
    created () {
      this.bookID = this.$route.params.id
    }
  }
</script>
