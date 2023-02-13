var $span = document.querySelectorAll('span');
var spanIndex = 0;
var $currentChar = $span[spanIndex];
// console.log($span);

document.addEventListener('keydown', function (event) {
  // console.log('event.key:', event.key);
  if (event.key === $currentChar.textContent) {
    $currentChar.className = 'font-green';
    $currentChar = $span[++spanIndex];
    $currentChar.className = 'line';
  } else if (event.key !== $currentChar.textContent) {
    $currentChar.className = 'font-red red-line';
  }
});
