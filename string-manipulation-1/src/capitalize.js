/* exported capitalize */
/*
* Define a function, named capitalize, with one parameter, word
*   Create a new variable, firstLetterCap, with the value of an empty string
*   Start a loop and use it to iterate throught each character of the word string
*     Check if the index is the first index then, if it is
*       Make the character at that index an uppercased letter, concatenate it to the firstLetterCap variable, and assign the result back to the firstLetterCap variable
*     If the index is any other index then
*       Make the character at that index a lowercased letter, concatenate it to the firstLetterCap variable, and assign the result back to the firstLetterCap variable
*   Return the firstLetterCap variable out of the function
*/

function capitalize(word) {
  var firstLetterCap = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      firstLetterCap += word[i].toUpperCase();
    } else {
      firstLetterCap += word[i].toLowerCase();
    }
  }
  return firstLetterCap;
}
