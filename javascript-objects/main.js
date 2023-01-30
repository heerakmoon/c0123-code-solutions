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
