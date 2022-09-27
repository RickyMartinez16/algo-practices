function descendingOrder(n) {
  let stringN = String(n);      
  let arrayN = stringN.split("");

  let sortedArray = arrayN.sort(function (a, b) {
    return b - a;
  });

  let sortedString = sortedArray.join("");

  return Number(sortedString);
}


//------best practice-----//

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }