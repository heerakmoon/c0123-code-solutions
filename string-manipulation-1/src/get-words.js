/* exported getWords */
/*
* Define a function, named getWords, with one parameter, string
*   Create a new variable, stringArr, with a value of an empty array
*   Create a second variable, word, with a value of an empty string
*   Use a loop to iterate through the string parameter
*   For each iteration,
*     Check if the index is the last index and if it is,
*       Concatenate the character of the index to the word variable and reassign back to word variable and
*       push the word variable into the stringArr array
*     If the index is not the last index, check if the character of the index is a space, if it is not
*       Concatenate the character of the index to the word variable and reassign back to word variable
*     If the character of the index is a space
*       Push the word variable to the stringArr array
*   Return the stringArr variable out of the function
*/

function getWords(string) {
  var stringArr = [];
  var word = '';
  for (var i = 0; i < string.length; i++) {
    if (i === (string.length - 1)) {
      word += string[i];
      stringArr.push(word);
    } else if (string[i] !== ' ') {
      word += string[i];
    } else if (string[i] === ' ') {
      stringArr.push(word);
      word = '';
    }
  }
  return stringArr;
}
