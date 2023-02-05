/* exported numVowels */
/*
* Define a function, named numVowels, with one parameter, string
*   Create a variable, numOfVowels, with the value of 0
*   Create another variable, lowerCaseString, with the value of the characters of the string all in lowercase
*   Use a loop to iterate through lowerCaseString, with each iteration
*     Check if the character at the index is 'a', 'e', 'i', 'o', 'u'
*       If the character is one of those, then add 1 to numOfVowels
*   Return the numOfVowels
*/

function numVowels(string) {
  var numOfVowels = 0;
  var lowerCaseString = string.toLowerCase();
  for (var i = 0; i < lowerCaseString.length; i++) {
    if (lowerCaseString[i] === 'a' || lowerCaseString[i] === 'e' || lowerCaseString[i] === 'i' || lowerCaseString[i] === 'o' || lowerCaseString[i] === 'u') {
      numOfVowels++;
    }
  }
  return numOfVowels;
}
