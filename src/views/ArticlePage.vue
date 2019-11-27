<template>
  <div class="ArticlePage">
    <Header />
    <Article />
  </div>
</template>

<script>
import Header from '../components/Header';
import Article from "../components/Article";

export default {
  name: 'ArticlePage',
  components: {
    Header,
    Article
  }
} 
</script>

<style scoped>
</style>