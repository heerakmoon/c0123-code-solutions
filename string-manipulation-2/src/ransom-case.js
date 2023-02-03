/* exported ransomCase */
/*
* Define a function, named ransomCase, with one parameter, string
*   Create a variable, everyOther, with the value of an empty string
*   Use a loop to iterate through string, for each iteration
*     Check if the index is odd or even, if it's even
*       Lowercase the character at the index and add it to the everyOther variable
*     If the index is odd
*       Uppercase the character at the index and add it to the everyOther variable
*   Return the everyOther variable
*/

function ransomCase(string) {
  var everyOther = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      everyOther += string[i].toLowerCase();
    } else {
      everyOther += string[i].toUpperCase();
    }
  }
  return everyOther;
}
