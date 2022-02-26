<template>
  <div id="app">
    <side-bar></side-bar>
    <main-mv></main-mv>
  </div>
</template>
<script>
import MainMv from "./components/MainMv.vue"
import SideBar from "./components/SideBar.vue"
export default {
  name: "App",
  components: {
    MainMv,
    SideBar,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
}
</style>
