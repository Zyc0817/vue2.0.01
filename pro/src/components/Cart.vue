<template>
  <div id="Explorer">
    <router-link :to="{ name: 'BookDetail'}" tag="div">
      点我
    </router-link>
    <router-view></router-view>
  </div>
</template>
