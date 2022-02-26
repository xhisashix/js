<template>
  <div class="main-list-wrapper">
    <ul class="main-list">
      <list-item
        v-for="dream in dreams"
        :dream="dream"
        :key="dream.id"
      ></list-item>
    </ul>
  </div>
</template>
<script>
import ListItem from "./ListItem.vue"
export default {
  components: {
    ListItem,
  },
  data() {
    return {
      dreams:[
        {name: "エンジニア"},
        {name: "エンジニア"},
        {name: "エンジニア"},
        {name: "エンジニア"},
        {name: "エンジニア"},
      ],
    }
  },
}
</script>
<style>
.main-list-wrapper {
  background: #fff;
  width: 80%;
  margin: 2rem auto;
  border-radius: 15px;
}
.main-list {
  padding: 2rem;
  text-align: left;
}
</style>
