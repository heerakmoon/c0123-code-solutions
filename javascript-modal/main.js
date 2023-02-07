var $purpleButton = document.querySelector('.btn-purple');
var $redButton = document.querySelector('.btn-red');
var $modal = document.querySelector('#modal');

$purpleButton.addEventListener('click', function (e) {
  $modal.className = '';
});

$redButton.addEventListener('click', function (e) {
  $modal.className = 'hidden';
});
