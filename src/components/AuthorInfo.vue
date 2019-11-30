<template>
  <div class="authorInfo" v-if="res">
    <section class="mainInfo">
      <div class="topbar">作者</div>
      <div class="authorWrapper">
        <router-link :to="{name: 'user_info', params:{name:res.loginname}}">
          <img :src="res.avatar_url" alt="头像" />
        </router-link>
        <div class="idWrapper">
          <div class="id">用户名:{{res.loginname}}</div>
          <div class="score">积分:{{res.score}}</div>
        </div>
      </div>
    </section>
    <section class="replies">
      <div>最近回复</div>
      <ul>
        <li v-for="item in list.replies" :key="item.id">
          <router-link
            :to="{name:'article',params:{name:item.author.loginname,id:item.id}}"
          >{{item.title}}</router-link>
        </li>
      </ul>
    </section>
    <section class="topics">
      <div>最近主题</div>
      <ul>
        <li v-for="item in list.topics" :key="item.id">
          <router-link
            :to="{name:'article',params:{name:item.author.loginname,id:item.id}}"
          >{{item.title}}</router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AuthorInfo',
  data() {
    return {
      res: null
    }
  },
  async created() {
    let res = await this.axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
    this.res = res.data.data
  },
  computed: {
    list() {
      return {
        replies: this.res.recent_replies.slice(0, 5),
        topics: this.res.recent_topics.slice(0, 5)
      }
    }
  },
  watch: {
    async $route(to) {
      try {
        let res = await this.axios.get(`https://cnodejs.org/api/v1/user/${to.params.name}`)
        this.res = res.data.data
      } catch (error) {
        alert(error)
      }
    }
  }
}
</script>

<style scoped>
.authorInfo {
  width: 300px;
  border: 1px solid #d1d5da;
  background-color: #fff;
}
.authorWrapper {
  margin-top: 10px;
  display: flex;
}
.authorWrapper > .idWrapper > div {
  margin: 10px 0 10px 10px;
  color: #252a2f;
}
.replies,
.topics {
  min-height: 30px;
}
.replies > div,
.topics > div {
  margin: 10px 15px;
  color: #24292e;
  font-size: 13px;
  font-weight: 450;
}
.replies > div {
  margin: 20px 15px 10px;
}
ul > li > a {
  color: #586069;
  font-size: 13px;
  font-weight: 450;
  margin: 2px 15px;
  /* 超出部分省略号 */
  display: inline-block;
  width: 276px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
img {
  width: 60px;
  height: 60px;
  border-radius: 6px;
}
.mainInfo {
  margin: 16px;
}
.mainInfo > .topbar {
  font-size: 13px;
  font-weight: 450;
  color: #24292e;
}
.mainInfo > div > div {
  font-size: 12px;
  font-weight: 450;
}
</style>