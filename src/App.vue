<template>
  <div id="app">
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
  color: #1067D6;
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