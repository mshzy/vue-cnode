<template>
  <div class="ArticlePage">
    <Header />
    <div class="wrapper">
      <Article />
      <AuthorInfo />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import Article from "../components/Article";
import AuthorInfo from '../components/AuthorInfo'
export default {
  name: 'ArticlePage',
  components: {
    Header,
    Article,
    AuthorInfo
  }
} 
</script>

<style scoped>
.authorInfo {
  position: absolute;
  right: 50px;
  top: 90px;
}
</style>