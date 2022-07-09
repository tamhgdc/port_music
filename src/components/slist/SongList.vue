<template>
  <div class="one-list">
    <div class="list-index">{{ props.index }}</div>
    <div class="sing-list">
      <div class="list-name">{{ props.oneSong.name }}</div>
      <div class="list-singer">
        <span v-for="(item, i) in props.oneSong.ar" :key="item"
          ><span v-if="i > 0">/</span>{{ item.name }}</span
        >
      </div>
    </div>
    <div class="icon-list">
      <span v-if="props.oneSong.mv !== 0" class="iconfont icon-Youtube"></span
      ><span class="iconfont icon-switch"></span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  oneSong: Object,
  index: Number
})
// console.log(props.index)
</script>

<style scoped>
.one-list {
  position: relative;
  height: 2.5rem;
  /* line-height: 2.5rem; */
  color: black;
  background-color: white;
}

.list-index {
  position: absolute;
  width: 2rem;
  display: flex;
  justify-content: center;
  left: 0.3rem;
  font-size: 1rem;
  color: rgb(168, 168, 168);
  line-height: 2.5rem;
}
.list-name {
  font-size: 0.9375rem;
  /*强制文本在一行内显示*/
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sing-list {
  position: absolute;
  height: 100%;
  width: 70%;
  left: 2.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.list-singer {
  font-size: 0.5rem;
  /*强制文本在一行内显示*/
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(168, 168, 168);
}

.icon-list {
  position: absolute;
  right: 0.5rem;
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.icon-list .iconfont {
  font-size: 1.25rem;
  color: rgb(168, 168, 168);
}
.icon-switch {
  margin-left: 0.5rem;
}
</style>
