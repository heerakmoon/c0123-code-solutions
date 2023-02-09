var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', function (e) {
  console.log('event.target:', e.target);
  console.log('event.target.tagName:', e.target.tagName);
});
