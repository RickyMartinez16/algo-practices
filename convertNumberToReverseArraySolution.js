function digitize(n) {
  let nString = n.toString();       //turned the input number to a string
  let stringArray = nString.split("").reverse();        //split the string and then reversed the ordeer in the array
  var numberArray = stringArray.map(Number);      //mapped over the array and made it a number
  return numberArray; //return the number array
}



//------best practice-----//

function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }