<template>
  <div class="nav-top">
    <span><van-icon name="wap-nav" size="1.25rem" /></span>
    <router-link to="/"><span>我的</span></router-link>
    <router-link to="/"><span>发现</span></router-link>
    <router-link to="/"><span>视频</span></router-link>
    <router-link to="/"
      ><span><van-icon name="search" size="1.25rem" /></span
    ></router-link>
  </div>
</template>

<script>
export default {}
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
}
a {
  color: #333;
}
</style>
