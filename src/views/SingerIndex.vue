// 歌手主页组件
<template>
  <singer-top class="sticky_top"></singer-top>
  <singer-mid></singer-mid>
</template>
<script>
export default {}
</script>
<style scoped>
.sticky_top {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>