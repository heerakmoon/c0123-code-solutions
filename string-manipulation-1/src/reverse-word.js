/* exported reverseWord */
/*
* Define a function, named reverseWord, with one parameter, word
*   Create a new variable, wordReversed, with a value of an empty string
*   Use a loop to iterate through word string, but start at the last index and decrement
*   For each iteration,
*     Concatenate the character at the index to the wordReversed variable and reassign that value back to the wordReversed variable
*   Return the wordReversed variable out of the function
*/

function reverseWord(word) {
  var wordReversed = '';
  for (var i = word.length - 1; i >= 0; i--) {
    wordReversed += word[i];
  }
  return wordReversed;
}
