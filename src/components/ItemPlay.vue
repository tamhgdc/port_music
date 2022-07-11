<template>
  <!-- 页面底部播放栏组件 -->
  <div class="player">
    <!-- 左边图片以及歌曲名等 -->
    <div class="left" @click="showPlayerAct">
      <img :src="playList[playIndex].al.picUrl" />
      <div>
        <p>{{ playList[playIndex].name }}</p>
        <span>横滑切换上下首哦</span>
      </div>
    </div>
    <!-- 右边为播放暂停播放列表等按钮 -->
    <div class="right">
      <div class="right-vant">
        <van-icon
          v-if="playStatus"
          name="pause-circle-o"
          @click="changePlay(false)"
        />
        <van-icon v-else name="play-circle-o" @click="changePlay(true)" />
      </div>
      <div>
        <span class="iconfont icon-musiclist" @click="showPopup"></span>
      </div>
      <audio
        ref="audio"
        :src="`https://music.163.com/song/media/outer/url?id=${playList[playIndex].id}.mp3`"
      ></audio>
    </div>
    <van-popup
      class="my-van-popup"
      v-model:show="states.showPlayList"
      round
      position="bottom"
      style="height: 60%; width: 90%; left: 5%; border-radius: 1rem; bottom: 5%"
    >
      <div class="wrapper">
        当前播放<span>({{ playList.length }})</span>
      </div>
      <!-- <div class="list-icon"></div> -->
    </van-popup>
  </div>

  <van-popup
    v-model:show="showPlayer"
    position="bottom"
    :style="{ height: '100%', width: '100%' }"
  >
    <detailedPlayer :song="playList[playIndex]" />
  </van-popup>
</template>
<script >
import { reactive } from 'vue'
// import detailedPlayer from '@/components/detailedPlayer.vue'
// import { reactive } from '@vue/reactivity'
// const { computed } = require('@vue/runtime-core')
// // 这样拿不到
// import { computed } from 'vue'
const { mapState, mapMutations } = require('vuex')
// const { ply, plyid } = computed(() => mapState(['playList', 'playIndex']))
// console.log(ply, plyid)
export default {
  setup() {
    const states = reactive({
      showPlayList: false
    })

    const showPopup = () => {
      states.showPlayList = true
    }

    return {
      states,
      showPopup
    }
  },
  mounted() {
    console.log(this.$refs)
  },
  computed: {
    ...mapState(['playList', 'playIndex', 'playStatus', 'showPlayer'])
  },
  methods: {
    ...mapMutations(['changeStatus', 'changeshowPlayer']),
    changePlay(value) {
      this.changeStatus(value)
      if (this.playStatus) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
    },
    showPlayerAct() {
      this.changeshowPlayer()
    }
  },
  watch: {
    playIndex() {
      // if (this.playStatus) {
      //   this.$refs.audio.play()
      // } else {
      //   this.$refs.audio.pause()
      // }
      this.$refs.audio.autoplay = true
      this.changeStatus(true)
    },
    playList() {
      this.$refs.audio.autoplay = true
      this.changeStatus(true)
    }
  }
}

// const obj = {
//   a: 12,
//   b: 23
// }
// const { a, b } = obj
// console.log(a, b)
// console.log({ ...obj })
</script>
<style scoped>
.player {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  border-top: 0.05rem solid #333;
  /* pading-left: 0.5rem; */
  background-color: white;
}
.left {
  display: flex;
  /* justify-content: center; */
  padding-left: 0.5rem;
  align-items: center;
  /* background-color: greenyellow; */
  float: left;
  width: 70%;
  height: 100%;
  /*强制文本在一行内显示*/
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.left img {
  margin-right: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
}
.left p {
  margin: 0;
  font-size: 0.85rem;
}
.left div span {
  font-size: 0.5rem;
}
.right {
  display: flex;
  align-items: center;
  float: right;
  /* background-color: pink; */
  /* width: 50%; */
  height: 100%;
  padding-right: 0.5rem;
}
.right div {
  font-size: 1.5rem;
}
.right span {
  font-size: 2.2rem;
}
.right .right-vant {
  padding-right: 0.5rem;
}
.wrapper span {
  font-size: 0.8rem;
  color: rgb(150, 150, 150);
}
</style>
