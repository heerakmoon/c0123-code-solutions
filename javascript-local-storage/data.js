/* exported todos */

var todos = [];

window.addEventListener('beforeunload', function (e) {
  var todosJSON = JSON.stringify(todos);

  localStorage.setItem('javascript-local-storage', todosJSON);
});
