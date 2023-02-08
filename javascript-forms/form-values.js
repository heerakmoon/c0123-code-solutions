var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var $nameValue = $contactForm.elements.name.value;
  var $emailValue = $contactForm.elements.email.value;
  var $messageValue = $contactForm.elements.message.value;
  var contactUsObj = {
    name: $nameValue,
    email: $emailValue,
    message: $messageValue
  };
  console.log('messageData:', contactUsObj);
  $contactForm.reset();
});
