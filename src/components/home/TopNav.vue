// 主页头部组件
<template>
  <!-- 轮播消息 -->
  <van-notice-bar
    left-icon="volume-o"
    scrollable
    text="由于网易云接口的原因，某些音乐的获取会出现问题导致无法正常播放，属正常现象，请另选择其他曲目进行播放"
    mode="closeable"
  />
  <!-- 主页头部按钮 -->
  <div class="nav-top">
    <span><van-icon name="wap-nav" size="1.25rem" /></span>
    <router-link to="/user"
      ><span :class="{ check_now: $route.name === 'User' }"
        >我的</span
      ></router-link
    >
    <!-- <span @click="showPopup">我的</span> -->
    <router-link to="/index"
      ><span :class="{ check_now: $route.name === 'Index' }"
        >发现</span
      ></router-link
    >
    <router-link to="/"><span>视频</span></router-link>
    <router-link to="/search"
      ><span><van-icon name="search" size="1.25rem" /></span
    ></router-link>
  </div>

  <van-popup
    v-model:show="show"
    position="left"
    :style="{ height: '100%', width: '100%' }"
    ><div @click="cancelPopup" class="login_cancel">取消</div>
    <log-in></log-in>
  </van-popup>
</template>

<script>
import { ref } from '@vue/reactivity'
// import store from '@/store'
import { onBeforeRouteLeave } from 'vue-router'
import { localGet } from '@/utils/token'
export default {
  setup() {
    const show = ref(false)
    const showPopup = () => {
      show.value = true
    }
    const cancelPopup = () => {
      show.value = false
    }
    onBeforeRouteLeave((to, next) => {
      if (to.name === 'User') {
        // console.log(localGet('token') != null)
        if (localGet('token') == null) {
          showPopup()
          next(false)
        }
      }
      // next()
    })
    return {
      show,
      showPopup,
      cancelPopup
    }
  }
}
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
  /* border-bottom: 0.1rem solid black; */
}
.login_cancel {
  position: absolute;
  top: 5%;
  right: 5%;
  font-size: 0.8rem;
}
</style>
