var $h1 = document.querySelector('h1');

function countDown() {
  if ($h1.textContent > 1) {
    $h1.textContent--;
  } else {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timerId);
  }
}

var timerId = setInterval(countDown, 1000);
