/* exported filterOutStrings */

function filterOutStrings(values) {
  var noStringsArr = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      noStringsArr.push(values[i]);
    }
  }
  return noStringsArr;
}
