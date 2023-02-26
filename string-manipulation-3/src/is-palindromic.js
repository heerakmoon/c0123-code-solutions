/* exported isPalindromic */
/*
* Define a function, named isPalindromic, with one parameter, string
*   Create a variable, stringNoSpace, with a value of an empty string
*   Loop through string, with each iteration
*     Check if the character at each index is a space, if it's not
*       Concatenate the character with the variable stringNoSpace
*   Create a variable, wordReversed, with a value of an empty string
*   Loop through the string, starting from the last letter to the first
*     With each iteration, check if the character is a space. If it's not
*       concatenate it with the wordReversed variable
*   Check if the value of stringNoSpace is the same as the value of wordReversed
*     If they are the same, return true
*   If they are different
*     Return false
*/

function isPalindromic(string) {
  var stringNoSpace = '';
  for (var m = 0; m < string.length; m++) {
    if (string[m] !== ' ') {
      stringNoSpace += string[m];
    }
  }
  var wordReversed = '';
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      wordReversed += string[i];
    }
  }
  if (stringNoSpace === wordReversed) {
    return true;
  } else {
    return false;
  }
}
