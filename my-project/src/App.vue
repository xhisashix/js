<template>
  <div id="app">
    <side-bar></side-bar>
    <router-view/>
  </div>
</template>
<script>
import SideBar from "./components/SideBar.vue"
export default {
  name: "App",
  components: {
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
