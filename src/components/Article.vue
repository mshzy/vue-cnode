<template>
  <div class="article" v-if="res">
    <div class="topic_header">
      <div class="topic_title">{{ res.title}}</div>
      <ul>
        <li>•发布于：{{res.create_at | formatDate}}</li>
        <li>•作者：{{res.author.loginname}}</li>
        <li>•{{res.visit_count}}次浏览</li>
      </ul>
      <div v-html=" res.content" class="topic_content"></div>
    </div>
    <div id="reply">
      <div class="topbar">回复</div>
      <div v-for="(reply,index) in res.replies" class="replySec" :key="index">
        <div class="replyUp">
          <router-link :to="{name:'user_info', params:{name:reply.author.loginname}}">
            <img :src="reply.author.avatar_url" alt />
          </router-link>
          <router-link :to="{name:'user_info',params:{name:reply.author.loginname}}">
            <span>{{reply.author.loginname}}</span>
          </router-link>
          <span>{{index+1}}楼</span>
          <span v-if="reply.ups.length>0">☝ {{reply.ups.length}}</span>
          <span v-else></span>
        </div>
        <div v-html="reply.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  data() {
    return {
      res: null
    }
  },
  created() {
    this.axios.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
      .then(res => this.res = res.data.data)
      .catch(error=>alert(error))
  }
}
</script>

<style scoped>
@import url("../assets/markdown-github.css");
.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
  margin-top: 10px;
}

.article:not(:first-child) {
  margin-right: 340px;
  margin-top: 15px;
}

#reply,
.topic_header {
  background-color: #fff;
}

#reply {
  margin-top: 15px;
}

#reply img {
  width: 30px;
  height: 30px;
  position: relative;
  bottom: -9px;
}

#reply a,
#reply span {
  font-size: 13px;
  color: #666;
  text-decoration: none;
}
.replySec {
  border-bottom: 1px solid #e5e5e5;
  padding: 0 10px;
}

.loading {
  text-align: center;
  padding-top: 300px;
}

.replyUp a:nth-of-type(2) {
  margin-left: 0px;
  display: inline-block;
}

.topic_header {
  padding: 10px;
}

.topic_title {
  font-size: 20px;
  font-weight: bold;
  padding-top: 8px;
}

.topic_header ul {
  list-style: none;
  padding: 0px 0px;
  margin: 6px 0px;
}

.topic_header li {
  display: inline-block;
  font-size: 12px;
  color: #838383;
}

.topic_content {
  border-top: 1px solid #e5e5e5;
  padding: 0 10px;
}

.markdown-text img {
  width: 92% !important;
}
</style>