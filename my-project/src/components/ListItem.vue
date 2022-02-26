<template>
  <transition name="slide-fade">
    <li v-if="show" @click="show = !show" class="list-item">
      {{ dream.name }}
    </li>
  </transition>
</template>
<script>
export default {
  props: {
    dream: {
      type: Object,
    },
  },
  data() {
    return {
      show: true,
    }
  },
};
</script>
<style>
.list-item {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  list-style: none;
  border-left: 5px solid #40b983;
  border-bottom: 1px solid #40b983;
  border-top: 1px solid #40b983;
  border-right: 1px solid #40b983;
  font-weight: 700;
  cursor: pointer;
}
.list-item:hover {
  background: #40b983;
  opacity: 0.8;
  color: #fff;
}
/* enter、 leave アニメーションで異なる間隔やタイミング関数を利用することができます */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(500px);
  opacity: 0;
}
</style>
