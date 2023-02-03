/* exported toObject */
/*
* Define a function, named toObject, with one parameter, keyValuePair
*   Create a new variable, object, with a value of an empty object literal
*   Set the property of the object to the value of the first item in the keyValuePair array
*   Assign the value of the property to the value of the second item in the keyValuePair array
*   Return the object variable out of the function
*/

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
