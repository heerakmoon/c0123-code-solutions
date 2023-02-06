/* exported capitalizeWord */
/*
* Define a function, named capitalizeWord, with one parameter, word
*   Create a variable, firstCharUpperCased, with a value of an empty string
*   Use a loop to iterate through word, for each iteration
*     Check if the index is the first index, if it is
*       Uppercase the character at that index then
*       Combine the character with the firstCharUpperCased string
*     If it isn't the first index
*       Lowercase the character at that index then
*       Combine the character with the firstCharUpperCased string
*   After the loop, check if the firstCharUpperCased string is 'Javascript', if it is then
*     Return 'JavaScript'
*   If it isn't,
*   Return the firstCharUpperCased variable
*/

function capitalizeWord(word) {
  var firstCharUpperCased = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      firstCharUpperCased += word[i].toUpperCase();
    } else {
      firstCharUpperCased += word[i].toLowerCase();
    }
  }
  if (firstCharUpperCased === 'Javascript') {
    return 'JavaScript';
  }
  return firstCharUpperCased;
}
