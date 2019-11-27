<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
html {
  overflow-y: scroll;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
li{list-style: none}
body{
  background-color: #f6f8fa;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>