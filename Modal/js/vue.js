;(function () {
  'use strict'

  var vm = new Vue({
    el: '#app',
    data() {
      return {
        hidden: true,
      }
    },
    methods: {
      toggleOpen() {
        this.hidden = !this.hidden
      },
    },
  })
})();
