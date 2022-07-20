<template>
  <div class="biggest">
    <van-config-provider :theme-vars="themeVars">
      <van-tabs v-model:active="states.active" animated swipeable>
        <van-tab v-for="item in states.listName" :title="item.name" :key="item">
          <ground-item :cat="item.name"></ground-item>
        </van-tab>
      </van-tabs>
    </van-config-provider>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import axios from '@/utils/axios'
import GroundItem from './GroundItem.vue'
export default {
  components: { GroundItem },
  setup() {
    const states = reactive({
      active: 0,
      curPage: 0,
      listName: []
    })

    const themeVars = {
      tabsBottomBarColor: '#333'
    }

    // 异步获取歌单分类的方法
    async function getCategary() {
      const res = await axios.get('/playlist/hot')
      states.listName = res.tags
      console.log(res)
    }
    // function activeChange(val) {

    // }
    onMounted(() => {
      getCategary()
      //   getHighList(30, states.offset)
    })
    return {
      states,
      themeVars,
      getCategary
      // activeChange
    }
  }
}
</script>

<style scoped>
</style>