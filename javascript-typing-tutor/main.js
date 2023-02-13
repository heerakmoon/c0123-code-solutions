var $span = document.querySelectorAll('span');
var spanIndex = 0;
var $currentChar = $span[spanIndex];

document.addEventListener('keydown', function (event) {
  // console.log('event.key:', event.key);
  // console.log('currentChar:', $currentChar);
  if (event.key === $currentChar.textContent) {
    $currentChar.className = 'font-green';
    $currentChar = $span[++spanIndex];
    $currentChar.className = 'line';
  } else if (event.key !== $currentChar.textContent) {
    $currentChar.className = 'font-red red-line';
  }
});
