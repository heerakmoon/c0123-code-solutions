/* exported truncate */
/*
* Define a function, named truncate, with two parameters, length and string
*   Create a variable, shortenedString, with the value of an empty string
*   Check if length is bigger than the number of characters in string, if length is bigger
*     Return string with an ellipsis added to the end of it
*   If the length is not bigger
*     Use a loop to iterate through string, only iterating up to the number before length
*       For each iteration,
*       Combine the character at the index with the shortenedString string
*   Return the shortenedString variable with an ellipsis added to the end
*/

function truncate(length, string) {
  var shortenedString = '';
  if (length > string.length) {
    return string + '...';
  } else {
    for (var i = 0; i < length; i++) {
      shortenedString += string[i];
    }
  }
  return shortenedString + '...';
}
