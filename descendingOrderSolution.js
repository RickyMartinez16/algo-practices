function descendingOrder(n) {
  let stringN = String(n);      //turn the input into a string
  let arrayN = stringN.split("");     //split the string into an array

  let sortedArray = arrayN.sort(function (a, b) {
    return b - a;
  });                               //sort the array

  let sortedString = sortedArray.join("");      //join the array and remove form the array

  return Number(sortedString);      //turn the sorted string into a number
}


//------best practice-----//

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }