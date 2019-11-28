<template>
  <div class="wrapper">
    <img alt="CNODE社区" src="../assets/logo.svg" @click="home" />
    <ul>
      <li>
        <a href="#">首页</a>
      </li>
      <li>
        <a href="#">新手入门</a>
      </li>
      <li>
        <a href="#">API</a>
      </li>
      <li>
        <a href="#">关于</a>
      </li>
      <li>
        <a href="#">注册</a>
      </li>
      <li>
        <a href="#">登录</a>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "Header",
  methods: {
    home() {
      this.$router.push('/')
    }
  }
}
</script>


<style scoped>
img {
  padding: 0 20px 4px;
  max-width: 200px;
}
img:hover {
  cursor: pointer;
}
.wrapper {
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  background-color: #24292e;
  display: flex;
  height: 60px;
  justify-content: space-between;
  margin-bottom: 20px;
}
ul {
  margin-right: 32px;
}
li {
  display: inline-block;
  padding: 24px 10px 0;
  font-size: 14px;
}
li > a {
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
}
</style>
