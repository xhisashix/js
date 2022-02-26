<template>
  <div>
    <h1>This is NinjaCode Component!</h1>
    <h2>{{ text }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
