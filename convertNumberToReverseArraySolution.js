function digitize(n) {
  let nString = n.toString();
  let stringArray = nString.split("").reverse();
  var numberArray = stringArray.map(Number);
  return numberArray;
}
