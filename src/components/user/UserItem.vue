<template>
  <div v-if="JSON.stringify(this.userProfile) === '{}'" class="load_icon">
    <van-loading type="spinner" size="5rem" color="#333" />
  </div>
  <div v-else class="big_box">
    <img class="bg_pic" :src="userProfile.backgroundUrl" alt="" />
    <div class="account_info">
      <img class="avatar_pic" :src="userProfile.avatarUrl" alt="" />
      <span class="words">{{ userProfile.nickname }}</span>
    </div>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import { mapState } from 'vuex'
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
    ...mapState(['userProfile'])
  },
  methods: {}
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
.load_icon {
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>