/* exported includes */
/*
* Define a function, named includes, with two parameters, array and value
*   Use a loop to iterate through array, with each iteration
*     Check if the value at the index is the same as value, if it is
*       Return true
*   If none of the items in the array are the same as value
*   Return false
*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
