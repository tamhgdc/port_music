// 主页头部组件
<template>
  <!-- 轮播消息 -->
  <van-notice-bar
    left-icon="volume-o"
    text="由于网易云接口的原因，某些音乐的获取会出现问题导致无法正常播放，属正常现象，请另选择其他曲目进行播放"
    mode="closeable"
  />
  <!-- 主页头部按钮 -->
  <div class="nav-top">
    <span><van-icon name="wap-nav" size="1.25rem" /></span>
    <router-link to="/"><span>我的</span></router-link>
    <router-link to="/"><span class="check_now">发现</span></router-link>
    <router-link to="/"><span>视频</span></router-link>
    <router-link to="/search"
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
  padding: 0.5rem 1rem 0rem 1rem;
  font-size: 1.125rem;
  height: 1.6rem;
  line-height: 1.6rem;
}
a {
  color: #333;
}
.check_now {
  /* font-size: 1.2rem; */
  font-weight: 700;
  border-bottom: 0.1rem solid black;
}
</style>
