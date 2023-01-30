var student = {
  firstName: 'Heerak',
  lastName: 'Moon',
  age: 27
};

var fullName = student.firstName + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'student';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Tesla',
  model: 'Model 3',
  year: 2022
};

vehicle['color'] = 'grey';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Reggie',
  type: 'bird'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
