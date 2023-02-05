/* exported lastChars */
/*
* Define a function, named lastChars, with two parameter, length and string
*   Create a new variable, lastLetters, with a value of an empty string
*   Use a loop to iterate through string, with each iteration
*     Check if the index is greater than or equal to the string's length minus the length parameter
*       If it is, add the character at that index to the lastLetter variable
*   Return the lastLetter variable out of the function
*/

function lastChars(length, string) {
  var lastLetters = '';
  for (var i = 0; i < string.length; i++) {
    if (i >= string.length - length) {
      lastLetters += string[i];
    }
  }
  return lastLetters;
}
