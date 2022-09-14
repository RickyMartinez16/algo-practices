function validatePIN(pin) {
  var isNumber = /^\d+$/.test(pin) && (pin.length == 4 || pin.length == 6);
  return isNumber;
}


//-------best prac------//

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)      //regex
  }