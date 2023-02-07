var $body = document.querySelector('body');
var $circle = document.querySelector('div');

$circle.addEventListener('click', function () {
  if ($circle.className === 'circle on') {
    $body.className = 'night';
    $circle.className = 'circle off';
  } else {
    $body.className = 'day';
    $circle.className = 'circle on';
  }
});
