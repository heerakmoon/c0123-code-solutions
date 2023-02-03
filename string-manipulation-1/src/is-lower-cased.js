/* exported isLowerCased */
/*
* Define a function, named isLowerCased, with one parameter, word
*   Create a new variable, lowerCasedWord, with a value of an empty string
*   Start a loop that iterates through the word string
*     At each index,
*     Turn the character into a lowercased letter, concatenate it with the lowerCasedWord variable, and reassign it back to the lowerCasedWord variable
*   Create a condition where, if the word parameter is the same as the value of lowerCasedWord variable
*     Return true
*   If the word parameter is not the same, then
*     Return false
*/

function isLowerCased(word) {
  var lowerCasedWord = '';
  for (var i = 0; i < word.length; i++) {
    lowerCasedWord += word[i].toLowerCase();
  }
  if (word === lowerCasedWord) {
    return true;
  } else {
    return false;
  }
}
