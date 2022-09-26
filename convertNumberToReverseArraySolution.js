function digitize(n) {
  let nString = n.toString();
  let stringArray = nString.split("").reverse();
  console.log(stringArray);
  var numberArray = stringArray.map(Number);
  return numberArray;
}
