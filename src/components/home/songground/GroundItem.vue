<template>
  <div class="big_box">
    <van-list
      v-model:loading="states.loading"
      :finished="states.finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in states.list" :key="item">
        <!-- 采用动态路由绑定id -->
        <router-link :to="'/itemmusic/' + item.id"
          ><div class="recommend-wipeitem">
            <!-- <span class="play-icon"
              ><van-icon name="play" />{{
                Math.floor(item.playCount / 10000) + '万'
              }}</span
            > -->
            <img :src="item.coverImgUrl" />
            <span>{{ item.name }}</span>
          </div></router-link
        >
      </van-cell>
    </van-list>
  </div>
</template>
<script setup>
import axios from '@/utils/axios'
import { reactive } from '@vue/reactivity'
const props = defineProps(['cat'])

const states = reactive({
  loading: false,
  finished: false,
  offset: 0,
  list: []
})

const onLoad = () => {
  getHighList(10, props.cat)
  if (states.list.length >= 50) {
    states.finished = true
  }
}
// 异步获取歌单的方法
async function getHighList(limit, cat) {
  const res = await axios.get(
    `/top/playlist?limit=${limit}&offset=${states.offset}&cat=${cat}`
  )
  //   console.log(`/top/playlist?limit=${limit}&offset=${states.offset}&cat=${cat}`)
  states.offset += limit
  states.list = [...states.list, ...res.playlists]

  // 加载状态结束
  states.loading = false
  console.log(res)
}
</script>
<style scoped>
.big_box {
  margin-bottom: 2.5rem;
}
.big_box .van-list {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* align-items: center; */
}

.big_box .van-list .van-cell {
  margin-top: 0.5rem;
  padding: 0;
  width: 6rem;
  height: 10rem;
}
.recommend-wipeitem {
  height: 100%;
  width: 100%;
}
.recommend-wipeitem img {
  width: 100%;
  display: block;
  border: 0 solid transparent;
  border-radius: 0.3rem;
}
.recommend-wipeitem {
  color: #333;
  font-size: 0.2rem;
  position: relative;
}

.play-icon {
  color: rgb(251, 251, 251);
  top: 0;
  right: 0.625rem;
  position: absolute;
}
</style>
