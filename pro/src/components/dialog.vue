<template>
  <div class="dialog-wrapper" :class="{ 'open':is_open }">
    <div class="overlay" @click="close">×</div>
    <div class="dialog">
      <div class="heading">
        <!--头部及标题-->
        <slot name="header"></slot>
      </div>
      <!--内容区域-->
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        is_open: false
      }
    },
    methods: {
      open () {
        if (!this.is_open) {
          // 触发模态窗口打开时间
          this.$emit('dialogOpen')
        }
        this.is_open = true
      },
      close () {
        if (this.is_open) {
          // 触发模态窗口打开时间
          this.$emit('dialogClose')
        }
        this.is_open = false
      }
    }
  }
</script>
<style>
  .dialog-wrapper{
    position: absolute;
    top:24px;
    left:24px;
    right:24px;
    bottom:24px;
    display: none;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    z-index: 500;
  }
  .open{
    display: block;
  }
</style>

