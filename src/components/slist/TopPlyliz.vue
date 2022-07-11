<template>
  <div class="nav-top">
    <router-link to="/"
      ><span class="iconfont icon-direction-left"></span
      ><span>歌单</span></router-link
    >

    <router-link to="/123"
      ><span><van-icon name="search" size="1.5rem" /></span
    ></router-link>
  </div>
</template>

<script setup>
</script>
<style scoped>
.nav-top {
  /* position: fixed; */
  display: flex;
  justify-content: space-between;
  padding-top: 00.5rem;
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
