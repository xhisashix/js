<template>
  <div class="sidebar-container">
    <h1>Sidebar.vue</h1>
    <nav-list></nav-list>
  </div>
</template>
<script>
import NavList from "./NavList.vue"
export default {
  name: 'SideBar',
  components: {
    NavList,
  }
}
</script>
<style>
.sidebar-container {
  width: 20vw;
  background: #fff;
}
.sidebar-container h1 {
  padding-top: 50px;
}
</style>
