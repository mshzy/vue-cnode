<template>
  <div class="mainListWrapper">
    <div class="mainList">
      <div class="type">
        <span @click="loadList(null,1)">全部</span>
        <span @click="loadList('good',1)">精华</span>
        <span @click="loadList('share',1)">分享</span>
        <span @click="loadList('ask',1)">问答</span>
        <span @click="loadList('job',1)">招聘</span>
      </div>
      <div class="loading" v-if="isLoading">
        <img src="../assets/loading.svg" />
      </div>
      <ul v-else>
        <li :key="index" v-for="(item,index) in items">
          <img class="avatar" :src="item.author.avatar_url" alt="avatar" />
          <span :class="item.class">{{item.tab}}</span>
          <router-link
            :to="{
          name:'article',
          params:{name: item.author.loginname, id: item.id}
          }"
          >
            <span class="title">{{item.title}}</span>
          </router-link>
          <img class="reply" src="../assets/reply.svg" />
          <span class="replyCount">{{item.reply_count}}/{{item.visit_count}}</span>
          <span class="lastTime">{{item.last_reply_at | formatDate}}</span>
        </li>
      </ul>
    </div>
    <Pagination @update="loadList(type,$event)" v-show="!isLoading" />
  </div>
</template>

<script>
import Pagination from './Pagination'

export default {
  name: 'MainList',
  data() {
    return {
      isLoading: true,
      items: null,
      type: null
    }
  },
  components: {
    Pagination
  },
  created() {
    this.loadList(null, 1)
  },
  methods: {
    async loadList(type, page) {
      let res
      if (type) {
        this.type = type
        let url = `https://cnodejs.org/api/v1/topics?limit=20&page=${page}&tab=${type}`
        res = await this.axios.get(url)
      } else {
        this.type = null
        res = await this.axios.get(`https://cnodejs.org/api/v1/topics?limit=20&page=${page}`)
      }
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
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
}
</script>

<style scoped>
.mainList {
  border-radius: 8px;
  border: 1px solid #d1d5da;
  background-color: #ffffff;
  max-width: 72%;
  margin: auto;
}
.type {
  background-color: #f1f8ff;
  padding: 14px 0 11px 10px;
  font-size: 14px;
  font-weight: bold;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
ul > li > a {
  width: 60%;
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
  text-overflow: ellipsis;
  display: inline-block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
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
  border-radius: 2px;
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