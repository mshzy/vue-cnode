<template>
  <div class="article" v-if="res">
    <div class="topic_header">
      <div class="topic_title">{{ res.title}}</div>
      <ul>
        <li>•发布于:{{res.create_at | formatDate}}</li>
        <li>•作者:{{res.author.loginname}}</li>
        <li>•{{res.visit_count}}次浏览</li>
      </ul>
      <div v-html="res.content" class="topic_content"></div>
    </div>
    <div id="reply">
      <div class="topbar">回复</div>
      <div v-for="(reply,index) in res.replies" class="replySec" :key="index">
        <div class="replyUp">
          <router-link :to="{name:'user_info', params:{name:reply.author.loginname}}">
            <img :src="reply.author.avatar_url" />
          </router-link>
          <router-link :to="{name:'user_info',params:{name:reply.author.loginname}}">
            <span>{{reply.author.loginname}}</span>
          </router-link>
          <span>{{index+1}}楼</span>
          <span v-if="reply.ups.length > 0" class="upCount">☝{{reply.ups.length}}</span>
          <span v-else></span>
        </div>
        <div v-html="reply.content" class="replyContent"></div>
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
      .catch(error => alert(error))
  }
}
</script>

<style scoped>
.topbar {
  background-color: #f6f8fa;
  padding: 8px 0 6px 12px;
  font-size: 13px;
  font-weight: 450;
}

.article {
  margin: 30px 400px 30px 60px;
  font-size: 15px;
}

#reply,
.topic_header {
  background-color: #fff;
  border: 1px solid #d1d5da;
}

#reply {
  position: relative;
  margin-top: 30px;
  font-weight: 450;
}

#reply img {
  width: 28px;
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
  border-top: 1px solid #e5e5e5;
  padding: 6px 20px 14px 20px;
}
.replyUp {
  margin-bottom: 22px;
}
.replyUp a:nth-of-type(2) {
  margin-left: 6px;
  margin-right: 8px;
  display: inline-block;
}

.topic_header {
  padding: 10px;
}
.upCount {
  position: absolute;
  left: 94%;
  transform: translateY(100%);
}

.topic_title {
  font-size: 20px;
  font-weight: bold;
  padding-top: 8px;
  padding-left: 6px;
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
  margin: 6px 6px;
}

.topic_content {
  padding: 10px 20px;
  font-weight: 450;
  line-height: 2;
}
.replyContent {
  line-height: 1.6;
}
</style>
<style>
.topic_content  img{
  max-width: 100%;
}
.topic_content pre {
  overflow: auto;
}
</style>