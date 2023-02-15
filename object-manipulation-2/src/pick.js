/* exported pick */
/*
* Define a function, named pick, with two parameters, source and keys
*   Create a variable, pickObj, with the value of an empty object literal
*   Use a loop to iterate through the keys array, with each iteration
*     Create a new variable, value, with the value of the source object's value at the item from keys array
*     Chcck to see if there is a value for the value variable, as long as there is a value
*       Make that item from keys a property of the pickObj object and assign the value variable to it
*   Return the pickObj variable
*/

function pick(source, keys) {
  var pickObj = {};
  for (var key of keys) {
    var value = source[key];
    if (value !== undefined) {
      pickObj[key] = value;
    }
  }
  return pickObj;
}
