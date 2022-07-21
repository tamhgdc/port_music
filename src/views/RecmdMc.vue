// 每日推荐组件
<template>
  <DailyTop class="sticky_top"></DailyTop>
  <div>
    <SongList
      v-for="(song, index) in states.recmdList"
      :key="song"
      :oneSong="song"
      :index="index"
      @click="getClickIndex(index)"
    ></SongList>
  </div>
  <div class="list-sub"></div>
</template>
<script>
// import DailyTop from '@/components/home/daily/DailyTop.vue'
import { reactive } from '@vue/reactivity'
import axios from '@/utils/axios'
import { onMounted } from '@vue/runtime-core'
import store from '@/store'
export default {
  setup() {
    const states = reactive({
      recmdList: []
    })
    async function getRecList() {
      const res = await axios.get('/recommend/songs')
      console.log(res.data)
      states.recmdList = res.data.dailySongs
    }
    // 在点击歌单中歌曲时触发
    const getClickIndex = (value) => {
      // console.log(value)
      store.commit('changeplayList', states.recmdList)
      store.commit('changeplayIndex', value)
    }
    onMounted(() => {
      getRecList()
    })
    return {
      states,
      getClickIndex
    }
  }
}
</script>
<style scoped>
.sticky_top {
  position: sticky;
  top: 0;
  z-index: 1;
}
.list-sub {
  height: 2.5rem;
}
</style>