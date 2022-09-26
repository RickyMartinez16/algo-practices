function digitize(n) {
  let nString = n.toString();
  let stringArray = nString.split("").reverse();
  var numberArray = stringArray.map(Number);
  return numberArray;
}



//------best practice-----//

function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }