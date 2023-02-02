/* exported filterOutNulls */

function filterOutNulls(values) {
  var noNullsArr = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      noNullsArr.push(values[i]);
    }
  }
  return noNullsArr;
}
