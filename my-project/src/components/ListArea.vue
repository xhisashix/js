<template>
  <div>
    <div class="main-form-wrapper">
      <form v-on:submit.prevent="addDream">
        <input
          type="text"
          v-model="newDreamName"
          class="form-input"
          placeholder="あなたの夢を追加してください"
        />
        <input type="submit" class="form-submit" />
      </form>
    </div>
    <div class="main-list-wrapper">
      <ul class="main-list">
        <list-item
          v-for="dream in dreams"
          :dream="dream"
          :key="dream.id"
        ></list-item>
      </ul>
    </div>
  </div>
</template>
<script>
import ListItem from "./ListItem.vue";
export default {
  components: {
    ListItem,
  },
  data() {
    return {
      newDreamName: "",
      dreams: [
        { name: "エンジニア" },
        { name: "エンジニア" },
        { name: "エンジニア" },
        { name: "エンジニア" },
        { name: "エンジニア" },
      ],
    };
  },
  methods: {
    addDream() {
      this.dreams.push({
        name: this.newDreamName
      })
      this.newDreamName = ""
    }
  }
};
</script>
<style>
.main-list-wrapper,
.main-form-wrapper {
  background: #fff;
  width: 80%;
  margin: 2rem auto;
  border-radius: 15px;
}
.main-list {
  padding: 2rem;
  text-align: left;
}
.main-form-wrapper .form-input {
  width: 30%;
  margin: 30px;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 40px;
  padding-left: 8px;
}
.main-form-wrapper .form-submit {
  background: #40b983;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
}
</style>
