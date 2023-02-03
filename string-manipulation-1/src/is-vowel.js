/* exported isVowel */
/*
* Define a function, named isVowel, with one parameter, char
*   Create a new variable, vowels, with a value of a string with all the vowels both upper and lowercased (no space between each letter)
*   Use a loop to iterate through the vowels string
*   During each iteration
*     Compare the character at the index to the char parameter and if it is the same
*       Return true
*   If none of the characters are the same as char, after looping all the way through the vowels variable,
*   Return false
*/

function isVowel(char) {
  var vowels = 'AaEeIiOoUu';
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === char) {
      return true;
    }
  }
  return false;
}
