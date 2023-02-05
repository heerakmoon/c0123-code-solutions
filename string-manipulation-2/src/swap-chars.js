/* exported swapChars */
/*
* Define a function, named swapChars, with three parameters, firstIndex, secondIndex, and string
*   Create a variable, charactersSwapped, with a value of an empty string
*   Use a loop to iterate through string, for each iteration
*     Check if the index is the same as firstIndex, if it is
*       Add the character at secondIndex to the charactersSwapped variable
*     If it is not the same as firstIndex, then check if it is secondIndex. If it is,
*       Add the character at firstIndex to the charactersSwapped variable
*     If it is not same as firstIndex or secondIndex then
*       Add the character at the index to the charactersSwapped variable
*   Return the charactersSwapped variable
*/

function swapChars(firstIndex, secondIndex, string) {
  var charactersSwapped = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      charactersSwapped += string[secondIndex];
    } else if (i === secondIndex) {
      charactersSwapped += string[firstIndex];
    } else {
      charactersSwapped += string[i];
    }
  }
  return charactersSwapped;
}
