/* exported capitalizeWords */
/*
* Define a function, named capitalizedWords, with one parameter, string
*   Create a variable, wordsArr, with the value of an array with all the words from string
*   create another variable, newString, with a value of an empty string
*   Use a loop to iterate through the wordsArr array, during each iteration
*     Take the first letter and capitalize it
*     Convert the rest of the letters to lowercase
*     Add them together along with the newString variable and reassign that value to newString
*     Check if the index is the last index, if it is not the last index
*       Add a space to the newString variable
*   Return the newString variable
*/

function capitalizeWords(string) {
  var wordsArr = string.split(' ');
  var newString = '';
  for (var i = 0; i < wordsArr.length; i++) {
    newString += wordsArr[i][0].toUpperCase() + (wordsArr[i].substring(1)).toLowerCase();
    if (i !== wordsArr.length - 1) {
      newString += ' ';
    }
  }
  return newString;
}
