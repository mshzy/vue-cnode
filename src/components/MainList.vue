<template>
  <div class="mainListWrapper">
    <div class="type">
      <span v-on:click="loadAll">全部</span>
      <span>精华</span>
      <span>分享</span>
      <span>问答</span>
      <span>招聘</span>
    </div>
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.svg" />
    </div>
    <ul>
      <li :key="index" v-for="(item,index) in items">
        <img class="avatar" :src="item.author.avatar_url" alt="avatar" />
        <span class="title">{{item.title}}</span>
        <img class="reply" src="../assets/reply.svg" />
        <span class="replyCount">{{item.reply_count}}/{{item.visit_count}}</span>
        <span class="lastTime">{{item.last_reply_at | formatDate}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainList',
  data() {
    return {
      isLoading: true,
      items: []
    }
  },
  mounted() {
    (async () => {
      let res = await this.axios.get('https://cnodejs.org/api/v1/topics?limit=20&page=1')
      this.isLoading = false
      this.items = res.data.data
    })()
  },
  methods: {
    async loadAll() {
      let res = await this.axios.get('https://cnodejs.org/api/v1/topics?limit=20&page=1')
      this.items = res.data.data
    }
  }
}

</script>

<style scoped>
.mainListWrapper {
  border: 1px solid #d1d5da;
  background-color: #ffffff;
  max-width: 72%;
  margin: auto;
}
.type {
  background-color: #F1F8FF;
  padding: 8px 0 8px 10px;
  font-size: 14px;
  font-weight: bold;
}
.type span {
  color: #1067d6;
  margin: 14px;
  cursor: pointer;
}
.loading {
  margin: 20% 47%;
}
.loading > img {
  width: 26px;
  animation: circle 3s infinite linear;
}
ul > li {
  padding-left: 20px;
  min-height: 52px;
  border-top: 1px solid #e1e4e8;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
ul > li:hover {
  background-color: #f6f8fa;
}
ul > li > .reply {
  position: absolute;
  right: 165px;
  width: 18px;
}
ul > li > .title {
  font-size: 16px;
  font-weight: 500;
  margin-left: 14px;
  margin-top: 3px;
}
ul > li > .replyCount {
  color: #8d8d8d;
  position: absolute;
  left: 85%;
  font-size: 12px;
  font-weight: bold;
}
ul > li > .lastTime {
  margin-left: auto;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 500;
  color: #8d8d8d;
}
.avatar {
  width: 30px;
}

@keyframes circle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>