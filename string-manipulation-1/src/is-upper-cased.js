/* exported isUpperCased */
/*
* Define a function, named isUpperCased, with one parameter, word
*   Create a new variable, wordToUpper, with the value of an empty string
*   Start a loop that iterates through the characters of word
*   At each index
*     Turn the character into an uppercased letter, concatenate it with wordToUpper, and reassign the value back to wordToUpper
*   Check if word is the same as the value of the wordToUpper variable, if they are the same then
*     Return true
*   If word is not the same as the value of wordToUpper variable then
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
