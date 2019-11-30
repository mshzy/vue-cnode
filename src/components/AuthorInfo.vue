<template>
  <div class="authorInfo" v-if="res">
    <section class="mainInfo">
      <div class="topbar">作者</div>
      <img :src="res.avatar_url" alt="头像" />
      <div>
        <div class="id">{{res.loginname}}</div>
        <div class="score">积分：{{res.score}}</div>
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
  computed:{
    list(){
      return {
        replies:this.res.recent_replies.slice(0,5),
        topics:this.res.recent_topics.slice(0,5)
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
a {
  color: #7a8289;
  font-size: 13px;
}
img {
  width: 60px;
}
.mainInfo {
  margin: 20px;
}
.mainInfo > .topbar {
  background-color: #f1f8ff;
}
</style>