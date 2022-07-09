<template>
  <!-- 轮播图 -->
  <div class="banner-top">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="banner in states.banners" :key="banner">
        <img :src="banner.pic" style="height: 8rem; width: 100%" />
      </van-swipe-item>
    </van-swipe>
  </div>
  <!-- 中间图标 -->
  <div class="box-mid">
    <div class="box-mid-mid">
      <div>
        <van-icon name="bookmark-o" size="2em" color="#f3d19e" />
      </div>
      <span>每日推荐</span>
    </div>
    <div class="box-mid-mid">
      <div>
        <van-icon name="service-o" size="2em" color="#f3d19e" />
      </div>
      <span>私人FM</span>
    </div>
    <div class="box-mid-mid">
      <div>
        <van-icon name="music-o" size="2em" color="#f3d19e" />
      </div>
      <span>歌单</span>
    </div>
    <div class="box-mid-mid">
      <div>
        <van-icon name="bar-chart-o" size="2em" color="#f3d19e" />
      </div>
      <span>排行榜</span>
    </div>
  </div>

  <!-- 推荐歌单小部件 -->
  <div class="recommend-plylst">
    <span>推荐歌单</span
    ><van-icon on name="arrow" size="0.9375rem" color="#f3d19e" />
  </div>

  <!-- 推荐歌单轮播部分 -->
  <div class="person-list">
    <van-swipe
      class="recommend-swipe"
      :loop="false"
      :width="104"
      height="180"
      :show-indicators="false"
    >
      <van-swipe-item
        v-for="getPersonliz in states.getPersonlizs"
        :key="getPersonliz"
      >
        <!-- 采用动态路由绑定id -->
        <router-link :to="'/itemmusic/' + getPersonliz.id"
          ><div class="recommend-wipeitem">
            <span class="play-icon"
              ><van-icon name="play" />{{
                Math.floor(getPersonliz.playCount / 10000) + '万'
              }}</span
            >
            <img :src="getPersonliz.picUrl" style="height: 6rem; width: 6rem" />
            <span>{{ getPersonliz.name }}</span>
          </div></router-link
        >
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import { onBeforeMount, reactive } from '@vue/runtime-core'
import axios from '@/utils/axios'
// states对象响应式数据
const states = reactive({
  banners: [], // 轮播图数组
  getPersonlizs: [] // 推荐歌单数组
})
// 获取轮播图的数据
async function getBanner() {
  const res = await axios.get('/banner?type=2')
  states.banners = res.banners
  // console.log(res)
}
// 获取推荐歌单
async function getPersonliz() {
  const res = await axios.get('/personalized?limit=6')
  states.getPersonlizs = res.result
  // console.log(res)
}

// 在组件挂载之前进行数据的请求
onBeforeMount(() => {
  getBanner()
  getPersonliz()
})
</script>

<style>
.banner-top {
  margin-top: 0.5rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.van-swipe {
  width: 100%;
  /* margin: 0.0625rem; */
  /* border-radius: 1rem; */
  /* height: 4rem; */
}
.box-mid {
  display: flex;
  justify-content: space-around;
  height: 5rem;
  text-align: center;
  margin-top: 0.5rem;
  /* background-color: pink; */
  /* line-height: 50px; */
}
.box-mid-mid {
  width: 4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
}

.box-mid-mid div {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  height: 3rem;
  width: 3rem;
  border-radius: 1.5rem;
}
.recommend-plylst {
  margin-top: 0.5rem;
}
.recommend-plylst span {
  padding: 0.0625rem;
  border-left: 0.125rem solid #f3d19e;
}
.person-list {
  margin-top: 00.5rem;
}
.recommend-wipeitem img {
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
