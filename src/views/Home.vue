<template>
  <div class="home">
    <Header />
    <MainList />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header';
import MainList from '../components/MainList'

export default {
  name: "home",
  components: {
    Header,
    MainList
  }
};
</script>



<style scoped>
</style>
