// 歌单详细页面的头部组件
<template>
  <div class="nav-top">
    <router-link to="/"
      ><span class="iconfont icon-direction-left"></span
      ><span>歌单</span></router-link
    >

    <router-link to="/search"
      ><span><van-icon name="search" size="1.5rem" /></span
    ></router-link>
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
  /* background-color: rgba(0, 0, 0, 0.05); */
}
a {
  color: rgb(237, 237, 237);
}
.iconfont {
  font-size: 1.5rem;
  margin-right: 1.2rem;
}
</style>
