// 每日推荐歌单详细页面的头部组件
<template>
  <div class="nav-top">
    <span
      ><span
        class="iconfont icon-direction-left"
        @click="this.$router.back(-1)"
      ></span
      ><span>歌单广场</span></span
    >
  </div>
</template>

<script setup>
</script>
<style scoped>
.nav-top {
  display: flex;
  justify-content: space-between;
  padding: 00.5rem 1rem 0.5rem 1rem;
  font-size: 1.125rem;
  height: 1.6rem;
  line-height: 1.6rem;
  background-color: #333;
  /* background-color: rgba(0, 0, 0, 0.05); */
}
a {
  color: rgb(237, 237, 237);
}
.nav-top span {
  color: #f3d19e;
}
.iconfont {
  font-size: 1.5rem;
  margin-right: 1.2rem;
}
</style>
