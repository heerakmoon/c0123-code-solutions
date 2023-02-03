/* exported initial */
/*
* Define a function, named initial, with one parameter, array
*   Create a new variable, noLastElement, with the value of an empty array
*   Use a loop to iterate through array, but only iterate up to the second to last item
*   At each index,
*     Add the item at that index to the noLastElement array
*   Return the noLastElement variable out of the function
*/

function initial(array) {
  var noLastElement = [];
  for (var i = 0; i < array.length - 1; i++) {
    noLastElement.push(array[i]);
  }
  return noLastElement;
}
