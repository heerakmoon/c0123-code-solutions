/* exported compact */
/*
* Define a function, named compact, with one parameter, array
*   Create a new variable, noFalsys, with the value of an empty array
*   Use a loop to iterate through array, at each index
*     Check if the item at the index is true(truthy)
*       If the item is true, then push the item into the noFalsys array
*   Return the noFalsys variable out of the function
*/

function compact(array) {
  var noFalsys = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      noFalsys.push(array[i]);
    }
  }
  return noFalsys;
}
