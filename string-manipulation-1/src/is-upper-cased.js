/* exported isUpperCased */
/*
* Define a function, named isUpperCased, with one parameter, word
*   Create a new variable, wordToUpper, with the value of an empty string
*   Start a loop that iterates through the characters of the word string
*     At each index
*     Turn the character into an uppercased letter, concatenate it with wordToUpper, and reassign it back to wordToUpper
*   Have a condition where if the word parameter is the same as the value of the wordToUpper variable then
*     Return true
*   But if the word parameter is not the same as the wordToUpper variable then
*     Return false
*/

function isUpperCased(word) {
  var wordToUpper = '';
  for (var i = 0; i < word.length; i++) {
    wordToUpper += word[i].toUpperCase();
  }
  if (word === wordToUpper) {
    return true;
  } else {
    return false;
  }
}
