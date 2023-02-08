/* exported takeRight */
/*
* Define a function, named takeRight, with two parameters, array and count
*   Create a variable, itemsFromEnd, with the value of an empty array
*   Use a loop to iterate through array, start the iteration at the array's length minus count,
*     During each iteration, add the the item to the itemsFromEnd array
*   Return the itemsFromEnd variable
*/

function takeRight(array, count) {
  var itemsFromEnd = [];
  for (var i = 0; i < array.length; i++) {
    if (i >= array.length - count) {
      itemsFromEnd.push(array[i]);
    }
  }
  return itemsFromEnd;
}
