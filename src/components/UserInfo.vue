<template>
  <div class="userInfo" v-if="user">
    <section class="mainInfo">
      <img :src="user.avatar_url" alt="头像" />
      <div>
        <div class="id">{{user.loginname}}</div>
        <div class="score">积分：{{user.score}}</div>
        <div class="signTime">注册时间：{{signTime}}</div>
      </div>
    </section>
    <section class="replies">
      <div>最近参与的主题</div>
      <router-link
        :to="{name:'article',params:{id:item.id}}"
        v-for="item in user.recent_replies"
        :key="item.id"
      >{{item.title}}</router-link>
    </section>
    <section class="topics">
      <div>最近创建的主题</div>
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
.userInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mainInfo {
  font-weight: 450;
  width: 855px;
  margin: 14px 0;
  background-color: #fff;
  border: 1px solid #d1d5da;
  border-radius: 10px;
  display: flex;
}
.mainInfo > div > div {
  margin: 16px 22px;
}
.replies {
  margin: 14px 0;
  padding: 0 0 0 8px;
  width: 855px;
  background-color: #fff;
  border: 1px solid #d1d5da;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  min-height: 216px;
}
.replies > a {
  margin: 8px;
}
.replies > :nth-last-child(1) {
  margin: 8px 8px 16px;
}
.replies > div {
  margin: 16px 8px 8px;
  font-weight: 450;
}
.topics {
  min-height: 216px;
  font-size: 14px;
  margin: 14px 0;
  padding: 0 0 0 8px;
  width: 855px;
  background-color: #fff;
  border: 1px solid #d1d5da;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}
.topics > a {
  margin: 8px;
}
.topics > :nth-last-child(1) {
  margin: 8px 8px 16px;
}
.topics > div {
  margin: 16px 8px 8px;
  font-weight: 450;
}
img {
  border-radius: 8px;
  width: 120px;
}
a {
  align-self: flex-start;
}
</style>