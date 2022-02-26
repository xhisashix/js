<template>
  <div>
    <li class="list-item">{{ dream.name }}</li>
  </div>
</template>
<script>
export default {
  props: {
    dream: {
      type: Object,
    },
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
}
.list-item:hover {
  background: #40b983;
  opacity: 0.8;
  color: #fff;
}
</style>
