/* exported reverseWords */
/*
* Define a function, named reverseWords, with one parameter, string
*   Create a variable, named stringArr, with a value of an array with each item being a word from string
*   Create a variable, named reversedWordsArr, with a value of an empty array
*     Loop through the stringArr, with each iteration
*       Create a variable, backward, with a value of an empty string
*       Loop through the characters of each item from StringArr, starting at the last character
*         Concatenate each character to the backward variable
*   Create a variable, named reverseString, with a value of an empty string
*   Loop through the reversedWordsArr, with each iteration
*     Concantenate the word to the reverseString variable
*     Check if the word is the last word in the array, if it's not
*       Concatenate a space
*   Return the reverseString variable
*/

function reverseWords(string) {
  var stringArr = string.split(' ');
  var reversedWordsArr = [];

  for (var m = 0; m < stringArr.length; m++) {
    var backward = '';
    for (var i = stringArr[m].length - 1; i >= 0; i--) {
      backward += stringArr[m][i];
    }
    reversedWordsArr.push(backward);
  }

  var reverseString = '';

  for (var k = 0; k < reversedWordsArr.length; k++) {
    reverseString += reversedWordsArr[k];
    if (k !== reversedWordsArr.length - 1) {
      reverseString += ' ';
    }
  }

  return reverseString;
}
