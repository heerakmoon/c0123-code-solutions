function convertMinutesToSecond(minutes) {
  return minutes * 60;
}

console.log('convertMinutesToSecond(5):', convertMinutesToSecond(5));

function greet(name) {
  return 'Hey, ' + name;
}

console.log('greet("Beavis"):', greet('Beavis'));

function getArea(width, height) {
  return width * height;
}

console.log('getArea(17, 42):', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

console.log('getFirstName({firstName: "Lelouche", lastName: "Lamperouge"}):', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('getLastElement(["propane", "and", "propane", "accessories"]:', getLastElement(['propane', 'and', 'propane', 'accessories']));
