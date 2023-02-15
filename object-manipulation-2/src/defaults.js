/* exported defaults */
/*
* Define a function, named defaults, with two parameters, target and source
*   Use a loop to iterate through the source object's properties, with each iteration
*     Check if the property from source exists in target by checking if it has a value when placed in target, if it doesn't
*       Add the property and its value to target
*/

function defaults(target, source) {
  for (var prop in source) {
    if (target[prop] === undefined) {
      target[prop] = source[prop];
    }
  }
}
