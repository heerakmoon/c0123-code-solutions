/* exported getValues */
/*
* Define a function, named getValues, with one parameter, object
*   Create a new variable, propertyValuesArr, with the value of an empty array
*   Use a loop to iterate through the object's properties
*     During each iteration,
*     Take the property's value and add it to the propertyValuesArr array
*   Return the propertyValuesArr variable out of the function
*/

function getValues(object) {
  var propertyValuesArr = [];
  for (var key in object) {
    propertyValuesArr.push(object[key]);
  }
  return propertyValuesArr;
}
