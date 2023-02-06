/* exported drop */
/*
* Define a function, named drop, with two parameters, array and count
*   Create a variable, lastItems, with a value of an empty array
*   Use a loop to iterate through array, during each iteration
*     Check if the index is greater than or equal to count, if it is
*       Add the item at the index to the lastItems array
*   Return the variable lastItems
*/

function drop(array, count) {
  var lastItems = [];
  for (var i = count; i < array.length; i++) {
    lastItems.push(array[i]);
  }
  return lastItems;
}
