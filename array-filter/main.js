const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const eventNumbers = numbers.filter((number) => number % 2 === 0);
const overFive = numbers.filter((number) => number > 5);
const startWithE = names.filter((name) => name[0] === 'E');
const haveD = names.filter((name) => name.toLowerCase().includes('d'));

console.log('eventNumbers:', eventNumbers);
console.log('overFive:', overFive);
console.log('startWithE:', startWithE);
console.log('haveD:', haveD);
