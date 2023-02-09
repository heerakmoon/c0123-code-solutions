var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (e) {
  if (e.target.matches('.tab')) {
    for (var i = 0; i < $tabs.length; i++) {
      if ($tabs[i] === e.target) {
        $tabs[i].className += ' active';
      } else {
        $tabs[i].className = 'tab';
      }
    }
    var dataViewAtt = e.target.getAttribute('data-view');
    for (var k = 0; k < $views.length; k++) {
      if ($views[k].getAttribute('data-view') === dataViewAtt) {
        $views[k].className = 'view';
      } else {
        $views[k].className = 'view hidden';
      }
    }
  }
});
