// 歌手主页上部分
<template>
  <div class="nav-top">
    <div>
      <span
        class="iconfont icon-direction-left"
        @click="this.$router.back(-1)"
      ></span>
    </div>

    <span class="iconfont icon-icon-test1"></span>
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
  color: #f3d19e;
  background-color: transparent;
}
a {
  color: rgb(237, 237, 237);
}
.iconfont {
  color: #f3d19e;
  font-size: 1.5rem;
}
</style>
