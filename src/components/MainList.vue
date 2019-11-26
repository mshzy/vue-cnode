<template>
  <div class="wrapper">
    <ul>
      <li :key="index" v-for="(item,index) in items">
        <img class="avatar" :src="item.author.avatar_url" alt="avatar" />
        <span>{{item.title}}</span>
        <img class="reply" src="../assets/reply.svg" />
        <span class="replyCount">{{item.reply_count}}/{{item.visit_count}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainList',
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    (async () => {
      let res = await this.axios.get('https://cnodejs.org/api/v1/topics?limit=20&page=1')
      this.items = res.data.data
    })()
  }
}
</script>

<style scoped>
.wrapper {
  background-color: #ffffff;
  max-width: 72%;
  margin: auto;
}
ul > li {
  min-height: 52px;
  border-top: 1px solid #e1e4e8;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
ul > li > .reply {
  position: absolute;
  right: 200px;
  width: 18px;
}
ul > li > .replyCount {
  position: absolute;
  left: 81%;
  font-size: 14px;
}
.avatar {
  width: 30px;
}
</style>