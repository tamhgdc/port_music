<template>
  <div class="bgpic">
    <img :src="song.al.picUrl" alt="" />
  </div>

  <div class="top">
    <div class="top-left">
      <span
        class="iconfont icon-direction-left"
        @click="changeshowPlayer"
      ></span>
      <span class="detailedMusic"
        ><span class="songName">{{ song.name }}</span>
        <span class="singerName"
          ><span v-for="(singer, i) in song.ar" :key="singer"
            ><span v-if="i > 0">/</span>{{ singer.name }}</span
          ></span
        ></span
      >
    </div>

    <div class="top-right">
      <span class="iconfont icon-icon-test1"></span>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  setup() {},
  props: ['song'],
  methods: {
    ...mapMutations(['changeshowPlayer'])
  },
  mounted() {
    console.log(this.song)
  }
}
</script>
<style scoped>
.bgpic {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  overflow: hidden;
}
.bgpic img {
  width: 100%;
  height: 100%;
  /* background-size: ; */
  transform: scale(1.8);
  filter: blur(50px) brightness(50%);
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 2.5rem;
  color: white;
}
.top-left {
  /* position: relative; */
  display: flex;
  align-items: center;
  width: 80%;
  height: 100%;
  /* background-color: pink; */
}
.top-left .icon-direction-left {
  font-size: 1.5rem;
}
.top-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* width: 50%; */
  height: 100%;
  /* background-color: rgb(219, 219, 219); */
}
.top-right .icon-icon-test1 {
  font-size: 1.5rem;
}
.detailedMusic {
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
}
.detailedMusic .songName {
  font-size: 1rem;
}
.detailedMusic .singerName {
  font-size: 0.5rem;
}
</style>
