/* exported tail */
/*
* Define a function, named tail, with one parameter, array
*   Create a new variable, noFirstElement, with a value of an empty array
*   Use a loop, starting at the second index, iterate through array
*     During each iteration,
*     Add the item at the index to the noFirstElement array
*   Return the noFirstElement variable out of the function
*/

function tail(array) {
  var noFirstElement = [];
  for (var i = 1; i < array.length; i++) {
    noFirstElement.push(array[i]);
  }
  return noFirstElement;
}
