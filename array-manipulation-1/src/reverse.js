/* exported reverse */
/*
* Define a function, named reverse, with one parameter, array
*   Create a variable, arrayReversed, with the value of an empty array
*   Use a loop to iterate through array, starting at the last item and decrement
*     With each iteration, push the item at the index to the arrayReversed array
*   Return the arrayReversed variable out of the function
*/

function reverse(array) {
  var arrayReversed = [];
  for (var i = array.length - 1; i >= 0; i--) {
    arrayReversed.push(array[i]);
  }
  return arrayReversed;
}
