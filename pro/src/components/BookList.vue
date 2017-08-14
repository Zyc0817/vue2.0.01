<template>
  <ul>
    <li v-for="item in books" @click="$emit('onBookSelect', item)">{{item}}</li>
  </ul>
</template>
<script>
  export default {
    props: [
      'books'
    ]
  }
</script>
