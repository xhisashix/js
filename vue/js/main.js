(function () {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [],
    },
    methods: {
      addItem: function () {
        var item = {
          title: this.newItem,
          isDone: false,
        };
        this.todos.push(item);
        this.newItem = '';
      },
      deleteItem: function (index) {
        if (confirm('Are you sure')) {
          this.todos.splice(index, 1);
        }
      },
    },
  });
})();
