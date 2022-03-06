(function () {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!',
    },
    methods: {
      changeMessage() {
        this.message = 'Change Vue.js!';
      }
    }
  });
})();