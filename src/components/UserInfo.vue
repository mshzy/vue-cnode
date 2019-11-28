<template>
  <div class="UserInfo" v-if="user">
    <section class="mainInfo">
      <img :src="user.avatar_url" alt="头像" />
      <span class="id">{{user.loginname}}</span>
      <div class="score">{{user.score}}</div>
      <div class="signTime">注册时间：{{signTime}}</div>
    </section>
    <section class="replies">
      <span>最近参与的主题</span>
      <router-link
        :to="{name:'article',params:{id:item.id}}"
        v-for="item in user.recent_replies"
        :key="item.id"
      >{{item.title}}</router-link>
    </section>
    <section class="topics">
      <span>最近创建的主题</span>
      <router-link
        :to="{name:'article',params:{id:item.id}}"
        v-for="item in user.recent_topics"
        :key="item.id"
      >{{item.title}}</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      user: null
    }
  },
  async created() {
    let res = await this.axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
    this.user = res.data.data
  },
  computed: {
    signTime() {
      return this.user.create_at.slice(0, 10)
    }
  }
}
</script>

<style scoped>
img {
  border-radius: 10px;
  width: 100px;
}
a {
  display: block;
}
</style>