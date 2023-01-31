function convertMinutesToSecond(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log('convertMinutesToSecond(5):', convertMinutesToSecond(5));

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

console.log('greet("Beavis"):', greet('Beavis'));
