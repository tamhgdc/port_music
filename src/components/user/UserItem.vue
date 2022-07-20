<template>
  <div class="big_box">
    <van-skeleton title avatar :row="3" :loading="false">
      <img class="bg_pic" :src="userProfile.backgroundUrl" alt="" />
      <div class="account_info">
        <img class="avatar_pic" :src="userProfile.avatarUrl" alt="" />
        <span class="words">{{ userProfile.nickname }}</span>
      </div>
    </van-skeleton>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import { mapActions, mapState } from 'vuex'
// import axios from '@/utils/axios'
export default {
  setup() {
    const loading = ref(true)

    // async function getaccount(){
    //   await axios.get()
    // }
    return {
      loading
    }
  },
  computed: {
    ...mapState(['userProfile', 'userProfile'])
  },
  methods: {
    ...mapActions(['getAccountByToken'])
  },
  beforeMount() {
    if (JSON.stringify(this.userProfile) === '{}') {
      this.getAccountByToken()
    }
  }
}
</script>
<style scoped>
.big_box {
  position: relative;
}
.bg_pic {
  position: absolute;
  width: 100%;
  z-index: -1;
  filter: brightness(90%);
}
.account_info {
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.avatar_pic {
  height: 5rem;
  width: 5rem;
  border-radius: 2.5rem;
}
.words {
  color: white;
}
</style>