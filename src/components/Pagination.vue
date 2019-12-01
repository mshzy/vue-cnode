<template>
  <div class="pagination">
    <button class="page" @click="handle(1)">首页</button>
    <button class="page" @click="lastPage">上一页</button>
    <div v-if="currentPage > 3">...</div>
    <button
      @click="handle(num)"
      v-for="(num,i) in numbers"
      :key="i"
      :class="{active: num === currentPage, page: true}"
    >{{num}}</button>
    <div>...</div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
      currentPage: 1
    }
  },
  methods: {
    handle(num) {
      this.currentPage = num
      if (num >= 3) {
        this.numbers = [num - 2, num - 1, num, num + 1, num + 2]
      } else {
        this.numbers = [1, 2, 3, 4, 5]
      }
      this.$emit('update',num)
    },
    lastPage() {
      if (this.currentPage > 1) {
        let num = this.currentPage - 1
        this.handle(num)
      }else {
        this.currentPage = 1 
        this.handle(1)
      }
    }
  }
}
</script>

<style scoped>
.pagination {
  border: 1px solid red;
  height: 60px;
  width: 60%;
  margin: 20px auto 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.page {
  border: 1px solid #d1d5da;
  padding: 4px 20px;
  margin: 4px 6px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
}
.page.active {
  background-color: #24292e;
  color: aliceblue;
}
</style>