var num1 = 2;
var num2 = 12;
var num3 = 15;
var maximumValue = Math.max(num1, num2, num3);

console.log('value of maximumValue:', maximumValue);

var heroes = ['Spider-Man', 'Iron Man', 'Beast Boy', 'Violet Parr'];
var randomNumber = Math.random();

randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('value of randomHero:', randomHero);
