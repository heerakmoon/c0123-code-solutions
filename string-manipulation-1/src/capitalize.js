/* exported capitalize */
/*
* Define a function, named capitalize, with one parameter, word
*   Create a new variable, firstLetterCap, with the value of an empty string
*   Start a loop and use it to iterate throught each character of the word string
*     Create a condition, if the index is the first index then
*      Turn the character at that index into an uppercased letter, concatenate it to the firstLetterCap variable, and assign the result of that expression back to the firstLetterCap variable
*     If the index is any other index then
*      Tun the character at that index into a lowercased letter, concatenate it to the firstLetterCap variable, and assign the result of the expression back to the firstLetterCap variable
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
