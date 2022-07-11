import { createStore } from 'vuex'

export default createStore({
  state: {
    // 通过vuex保存播放列表内容，作为公共组件
    playList: [{
      // al表示歌曲的封面

      al: {
        id: 3319407,
        name: "陪你度过漫长岁月",
        picUrl: "https://p1.music.126.net/Nm5rwMYaH_20Zh61XhGn8Q==/109951166600775221.jpg",
        tns: [],
        pic_str: "109951166600775221",
        pic: 109951166600775220
      },
      // id表示歌曲的id
      id: 35403523,
    }],
    // 歌曲在歌单中的顺序
    playIndex: 0,
    playStatus: false,
    showPlayer: false
  },
  getters: {
  },
  mutations: {
    changeStatus(state, newValue) {
      // console.log("调用了vuex的changeStatus方法");
      // console.log(state, newValue);
      state.playStatus = newValue
    },
    changeplayList(state, newList) {
      state.playList = newList
      // console.log(state.playList);
      // this.state.playList = value
      // console.log(playList, newList);
      // console.log("调用了", value);
    },
    changeplayIndex(state, newIndex) {
      state.playIndex = newIndex
      // console.log(playIndex, value);
      // console.log(playIndex);
    },
    changeshowPlayer(state) {
      // console.log(state.showPlayer);
      state.showPlayer = !state.showPlayer
    }
  },
  actions: {
  },
  modules: {
  }
})
