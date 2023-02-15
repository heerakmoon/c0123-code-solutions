/* exported invert */
/*
* Define a function, named invert, with one parameter, source
*   Create a variable, invertedObj, with the value of an empty object literal
*   Use a loop to iterate through the source object's properties, with each iteration
*     Assign the value as the invertedObj's property and the property as the value
*   Return the invertedObj variable
*/

function invert(source) {
  var invertedObj = {};
  for (var prop in source) {
    invertedObj[source[prop]] = prop;
  }
  return invertedObj;
}
