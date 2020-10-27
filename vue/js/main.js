(function () {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: ['list1', 'list2', 'list3', 'list4'],
    },
    methods: {
      addItem: function () {
        this.todos.push(this.newItem);
        this.newItem = '';
      },
    },
  });
})();
