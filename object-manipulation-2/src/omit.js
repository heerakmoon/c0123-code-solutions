/* exported omit */
/*
* Define a function, named omit, with two parameters, source and keys
*   Create a variable, omitObj, with the value of an empty object
*   Use a loop to iterate through the properties of the source object, with each iteration
*     Place the value of the property in the source object into a variable, value
*     Check if the property is in the keys array and if it is not
*       Add the property and its value to the empty object, omitObj
*   Return the omitObj variable
*/

function omit(source, keys) {
  var omitObj = {};
  for (var key in source) {
    var value = source[key];
    if (!keys.includes(key)) {
      omitObj[key] = value;
    }
  }
  return omitObj;
}
