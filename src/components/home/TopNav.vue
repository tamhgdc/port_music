// 主页头部组件
<template>
  <!-- 主页头部按钮 -->
  <div class="nav-top">
    <span @click="leftShow = true"
      ><van-icon name="wap-nav" size="1.25rem"
    /></span>
    <router-link to="/user"
      ><span :class="{ check_now: $route.name === 'User' }"
        >我的</span
      ></router-link
    >
    <router-link to="/index"
      ><span :class="{ check_now: $route.name === 'Index' }"
        >发现</span
      ></router-link
    >
    <router-link to="/search"
      ><span><van-icon name="search" size="1.25rem" /></span
    ></router-link>
  </div>

  <van-popup
    v-model:show="loginShow"
    position="left"
    :style="{ height: '100%', width: '100%' }"
    ><div @click="loginShow = false" class="login_cancel">取消</div>
    <log-in></log-in>
  </van-popup>
  <van-popup
    v-model:show="leftShow"
    position="left"
    :style="{ height: '100%', width: '30%' }"
    ><van-button v-if="hasToken" color="#333" @click="logoutFunc"
      >退出登录</van-button
    ><van-button v-else color="#333" @click="loginFunc"
      >未登录</van-button
    ></van-popup
  >
</template>

<script>
import { ref } from '@vue/reactivity'
// import store from '@/store'
import { onBeforeRouteLeave } from 'vue-router'
import store from '@/store'
import { mapState } from 'vuex'
export default {
  setup() {
    const loginShow = ref(false) // 是否展示登录页面弹出框
    const leftShow = ref(false) // 是否展示左侧弹出框

    onBeforeRouteLeave((to, from, next) => {
      if (to.name === 'User') {
        if (!store.state.hasToken) {
          loginShow.value = true
        } else {
          next()
        }
      } else {
        next()
      }
    })

    function logoutFunc() {
      store.dispatch('getLogout')
      leftShow.value = false
    }

    function loginFunc() {
      leftShow.value = false
      loginShow.value = true
    }

    return {
      loginShow,
      leftShow,
      logoutFunc,
      loginFunc
    }
  },
  computed: {
    ...mapState(['hasToken'])
  },
  mounted() {
    // console.log(this.hasToken)
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
