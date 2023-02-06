/* exported take */
/*
* Define a function, named take, with two parameters, array and count
*   Create a variable, firstItemsArray, with a value of an empty array
*   Use a loop to iterate through array, with each iteration
*     Check if the index is less than count, if it is
*     Push the item at the index to the firstItemsArray array
*   Return the firstItemsArray
*/

function take(array, count) {
  var firstItemsArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i < count) {
      firstItemsArray.push(array[i]);
    }
  }
  return firstItemsArray;
}
