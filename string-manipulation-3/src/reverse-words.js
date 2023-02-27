/* exported reverseWords */
/*
* Define a function, named reverseWords, with one parameter, string
*   Create a variable, named stringArr, with a value of an array with each item being the string separated at each space
*   Create a variable, named reverseString, with a value of an empty string
*     Loop through the stringArr, with each iteration
*       Place the item into a variable, item
*       Create a variable, backward, with a value of an empty string
*       Loop through the characters of each item, starting at the last character
*         Concatenate each character to the backward variable
*       Concatenate the backward variable to the reverseString variable
*       Check if the value of each index is the last item, if it's not
*         Concatenate a space to the reverseString variable
*   Return the reverseString variable
*/

function reverseWords(string) {
  var stringArr = string.split(' ');
  var reverseString = '';

  for (var m = 0; m < stringArr.length; m++) {
    var item = stringArr[m];
    var backward = '';
    for (var i = item.length - 1; i >= 0; i--) {
      backward += item[i];
    }
    reverseString += backward;
    if (item[m] !== item[stringArr.length - 1]) {
      reverseString += ' ';
    }
  }
  return reverseString;
}
