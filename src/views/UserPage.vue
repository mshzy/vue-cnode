<template>
  <div class="UserPage">
    <Header/>
    <UserInfo/>
  </div>
</template>

<script>
import UserInfo from '../components/UserInfo'
import Header from '../components/Header'

export default {
  name: 'UserPage',
  components:{
    UserInfo,
    Header
  }
}
</script>

<style scoped>

</style>