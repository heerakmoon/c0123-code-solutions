/* exported isLowerCased */
/*
* Define a function, named isLowerCased, with one parameter, word
*   Create a new variable, lowerCasedWord, with a value of an empty string
*   Start a loop that iterates through word
*   At each index,
*     Turn the character into a lowercased letter, concatenate it with the lowerCasedWord variable, and reassign the value back to the lowerCasedWord variable
*   Check if word is the same as the value of lowerCasedWord variable, if they are the same
*     Return true
*   If word is not the same, then
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
