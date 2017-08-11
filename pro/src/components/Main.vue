<template>
  <div id="Main">
    <router-view></router-view>
    <div class="tabs">
      <ul class="ul1">
        <router-link :to="{ name: 'Home'}" tag="li">
          <img src="../assets/atm.png" alt="">
          <div>首页</div>
        </router-link>
        <router-link :to="{ name: 'Explorer'}" tag="li">
          <img src="../assets/bags.png" alt="">
          <div>分类</div>
        </router-link>
        <router-link :to="{ name: 'Cart'}" tag="li">
          <img src="../assets/cart.png" alt="">
          <div>购物车</div>
        </router-link>
        <router-link :to="{ name: 'Me'}" tag="li">
          <img src="../assets/image-text.png" alt="">
          <div>我</div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<style>
  *{
    margin:0;
    padding:0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height:100%;
  }
  #Main{
    height: 100%;
    overflow: scroll;
  }
  .tabs{
    position: fixed;
    bottom:0;
    width:100%;
    background-color: white;
  }
  .ul1{
    overflow: hidden;
    list-style: none;
  }
  .ul1 li{
    display: inline-block;
    width:25%;
    float: left;
  }
  .active{
    color: red;
  }
</style>
