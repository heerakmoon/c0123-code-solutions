/* exported chunk */
/*
* Define a function, named chunk, with two parameters, array and size
*   Create a new variable, arrOfArrs, with the value of an empty array
*   Use a loop to iterate through array, when incrementing, increment by adding size to the index
*   With each iteration,
*     Create new arrays and have the number of items in the same as size and the items are taken from array
*     Add each new array to the arrOfArrs array
*   Return the arrOfArrs variable
*/

function chunk(array, size) {
  var arrOfArrs = [];
  for (var i = 0; i < array.length; i += size) {
    arrOfArrs.push(array.slice(i, i + size));
  }
  return arrOfArrs;
}
