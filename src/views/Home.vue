<template>
  <div class="home">
    <img alt="CNODE社区" src="../assets/logo.png" />
    <Header />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";

export default {
  name: "home",
  components: {
    Header
  }
};
</script>
