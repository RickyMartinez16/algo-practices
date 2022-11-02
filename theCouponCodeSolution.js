

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode === correctCode) {        //if the code is the same code
    let today = new Date(currentDate);      //make a new date of today with input
    console.log(today);
    let expired = new Date(expirationDate); //make a new date of expiration date with exp input
    console.log(expired);
    if (today <= expired) {     //compare the dates
      return true;
    } else {
      return false;
    }
  }
  return false;
}

//-----working-----//

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    new Date(currentDate) <= new Date(expirationDate)
  );
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    Date.parse(expirationDate) >= Date.parse(currentDate)
  );
}
