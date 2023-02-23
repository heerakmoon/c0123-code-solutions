var $leftArrow = document.querySelector('#left');
var $rightArrow = document.querySelector('#right');
var $circles = document.querySelectorAll('.fa-circle');
var $images = document.querySelectorAll('img');

var indexCounter = 0;

$rightArrow.addEventListener('click', function (event) {
  $images[indexCounter].className = 'hidden';
  $circles[indexCounter].className = 'far fa-circle';
  ++indexCounter;
  $images[indexCounter].className = '';
  $circles[indexCounter].className = 'fas fa-circle';
});

$leftArrow.addEventListener('click', function (event) {
  $images[indexCounter].className = 'hidden';
  $circles[indexCounter].className = 'far fa-circle';
  --indexCounter;
  $images[indexCounter].className = '';
  $circles[indexCounter].className = 'fas fa-circle';
});
