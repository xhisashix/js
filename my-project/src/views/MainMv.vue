<template>
  <div class="main-container">
    <list-area></list-area>
  </div>
</template>
<script>
import ListArea from '../components/ListArea.vue'
export default {
  name: 'MainMv',
  components: {
    ListArea,
  }
}
</script>
<style>
.main-container {
  width: 80vw;
  background: #ddd;
}
.main-container h1 {
  padding-top: 50px;
}
</style>
