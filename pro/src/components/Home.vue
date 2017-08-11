<template>
  <div id="Home">
    <div v-for="(item, index) in articles">
      <!--<div v-text="item.title"></div>-->
      <router-link :to="{ name: 'BookDetail', params: { id: index }}" v-text="item.title" tag="div" replace></router-link>
    </div>
    <router-link :to="{ path: '/me'}" append>
      <button>返回</button>
    </router-link>
    <BookList :books="articles"></BookList>
  </div>
</template>
<script>
  import BookList from './BookList.vue'
  export default {
    data () {
      return {
        msg: 'zyc',
        articles: []
      }
    },
    mounted: function () {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true
      }).then(function (response) {
        this.articles = response.data.subjects
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      })
    },
    components: {
      BookList
    }
  }
</script>
<style>
  #Home div{
    color: red;
  }
</style>
