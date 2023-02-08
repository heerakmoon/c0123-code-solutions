function handleFocus(e) {
  console.log('focus event fired');
  console.log('event.target.name:', e.target.name);
}

function handleBlur(e) {
  console.log('blur event fired');
  console.log('event.target.name:', e.target.name);
}

function handleInput(e) {
  console.log('event.target.name:', e.target.name, 'event.target.value:', e.target.value);
}

var $name = document.querySelector('#user-name');
var $email = document.querySelector('#user-email');
var $message = document.querySelector('#user-message');

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
