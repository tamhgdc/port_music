<template>
  <div>私人FM</div>
</template>
<script>
import { onMounted } from '@vue/runtime-core'
// import axios from '@/utils/axios'
// import store from '@/store'
export default {
  setup() {
    // async function getPriFM() {
    //   const res = await axios.get('/personal_fm')
    //   console.log(res)
    //   const arr = store.state.playList.splice(
    //     store.state.playIndex,
    //     0,
    //     ...res.data
    //   )
    //   store.commit('changeplayList', arr)
    // }

    onMounted(() => {
      //   getPriFM()
    })
    return {}
  }
}
</script>
<style scoped>
</style>
