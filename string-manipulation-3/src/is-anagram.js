/* exported isAnagram */
/*
* Define a function, named letters, that counts the number of characters in a string, excluding spaces
* Define a function, named isAnagram, with two parameters, firstString and secondString
*   Create a variable, firstStringChars, with the value of the return value from the letters function with an argument of firstString
*   Create a variable, secondStringChars, with the value of the return value from the letters function with an argument of secondString
*   Check if the number of firstStringChars and secondStringChars are the same, if they're not
*     return false
*   If they are the same,
*
*/

function letters(string) {
  var numOfLetters = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      numOfLetters++;
    }
  }
  return numOfLetters;
}

function isAnagram(firstString, secondString) {
  var firstStringChars = letters(firstString);
  var secondStringChars = letters(secondString);
  if (firstStringChars !== secondStringChars) {
    return false;
  // } else {
  }
}
