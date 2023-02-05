/* exported firstChars */
/*
* Define a function, named firstChars, with two parameters, length and string
*   Create a variable, firstLetters, with a value of an empty string
*   Use a loop to iterate through string, for each iteration
*     Check if the index is less than the length parameter, if it is
*       Add the character at the index to the firstLetters variable
*   Return the firstLetters variable out of the function
*/

function firstChars(length, string) {
  var firstLetters = '';
  for (var i = 0; i < string.length; i++) {
    if (i < length) {
      firstLetters += string[i];
    }
  }
  return firstLetters;
}
