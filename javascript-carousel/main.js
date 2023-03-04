var $leftArrow = document.querySelector('#left');
var $rightArrow = document.querySelector('#right');
var $circles = document.querySelectorAll('.fa-circle');
var $images = document.querySelectorAll('img');
var $body = document.querySelector('body');

var indexCounter = 0;
$body.className = 'bulbasaur';

$rightArrow.addEventListener('click', function (event) {
  showImg(nextIndex());
  changeBackgroundColor();
});

$leftArrow.addEventListener('click', function (event) {
  showImg(previousIndex());
  changeBackgroundColor();
});

function nextIndex() {
  if (indexCounter === $images.length - 1) {
    indexCounter = 0;
    return indexCounter;
  } else {
    return ++indexCounter;
  }
}

function previousIndex() {
  if (indexCounter === 0) {
    indexCounter = $images.length - 1;
    return indexCounter;
  } else {
    return --indexCounter;
  }
}

function showImg(index) {
  for (var i = 0; i < $images.length; i++) {
    if (i === index) {
      $images[indexCounter].className = '';
      $circles[indexCounter].className = 'fas fa-circle';
    } else {
      $images[indexCounter].className = 'hidden';
      $circles[indexCounter].className = 'far fa-circle';
    }
  }
}

function changeBackgroundColor() {
  if (indexCounter === 0) {
    $body.className = 'bulbasaur';
  } else if (indexCounter === 1) {
    $body.className = 'charmander';
  } else if (indexCounter === 2) {
    $body.className = 'squirtle';
  } else if (indexCounter === 3) {
    $body.className = 'pikachu';
  } else if (indexCounter === 4) {
    $body.className = 'jiggly-puff';
  }
}
