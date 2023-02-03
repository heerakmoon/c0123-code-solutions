/* exported getKeys */
/*
* Define a function, named getKeys, with one parameter, object
*   Create a new variable, keysArr, with the value of an empty array
*   Use a loop to iterate through the object's properties
*     For each iteration,
*     Add the property to the keysArr array
*   Return the keysArr variable out of the function
*/

function getKeys(object) {
  var keysArr = [];
  for (var key in object) {
    keysArr.push(key);
  }
  return keysArr;
}
