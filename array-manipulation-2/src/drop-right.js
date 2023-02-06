/* exported dropRight */
/*
* Define a function, named dropRight, with two parameters, array and count
*   Create a variable, firstElements, with a value of an empty array
*   Use a loop to iterate through array as long as the index is less that array's length minus count, with each iteration
*     Add the item at the index to the firstElements variable
*   Return the firstElement variable
*/

function dropRight(array, count) {
  var firstElements = [];
  for (var i = 0; i < array.length - count; i++) {
    firstElements.push(array[i]);
  }
  return firstElements;
}
