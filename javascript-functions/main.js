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

function getArea(width, height) {
  var areaOfRectangle = width * height;
  return areaOfRectangle;
}

console.log('getArea(17, 42):', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

console.log('getFirstName({firstName: "Lelouche", lastName: "Lamperouge"}):', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
