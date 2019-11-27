<template>
  <div class="mainListWrapper">
    <div class="type">
      <span @click="loadList()">全部</span>
      <span @click="loadList('good')">精华</span>
      <span @click="loadList('share')">分享</span>
      <span @click="loadList('ask')">问答</span>
      <span @click="loadList('job')">招聘</span>
    </div>
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.svg" />
    </div>
    <ul>
      <li :key="index" v-for="(item,index) in items">
        <img class="avatar" :src="item.author.avatar_url" alt="avatar" />
        <span :class="item.class">{{item.tab}}</span>
        <router-link :to="{
          name:'article',
          params:{id:item.id}
          }">
          <span class="title">{{item.title}}</span>
        </router-link>
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
  created() {
    this.loadList()
  },
  methods: {
    async loadList(type) {
      this.isLoading = true
      this.items = []
      let res
      if (type) {
        let url = `https://cnodejs.org/api/v1/topics?limit=20&page=1&tab=${type}`
        res = await this.axios.get(url)
      } else
        res = await this.axios.get('https://cnodejs.org/api/v1/topics?limit=20&page=1')
      this.isLoading = false
      for (const v of res.data.data) {
        if (v.good == true) {
          v.class = 'good'
          v.tab = '精华'
        } else if (v.top == true) {
          v.class = 'good'
          v.tab = '置顶'
        } else if (v.tab == 'ask') {
          v.class = 'normal'
          v.tab = '问答'
        } else if (v.tab == 'share') {
          v.class = 'normal'
          v.tab = '分享'
        } else {
          v.class = 'normal'
          v.tab = '招聘'
        }
      }
      this.items = res.data.data
    }
  },
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
  background-color: #f1f8ff;
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
  animation: circle 2s infinite linear;
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
  right: 144px;
  width: 18px;
}
ul > li > span.good {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
  margin-left: 12px;
}
ul > li > span.normal {
  background: #ababab;
  padding: 2px 4px;
  border-radius: 3px;
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
  margin-left: 12px;
}
ul > li .title {
  font-size: 16px;
  font-weight: 500;
  color: #24292e;
  margin-left: 14px;
  margin-top: 3px;
}
ul > li > .replyCount {
  color: #8d8d8d;
  position: absolute;
  left: 87%;
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