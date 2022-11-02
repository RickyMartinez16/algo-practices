

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode === correctCode) {
    let today = new Date(currentDate);
    console.log(today);
    let expired = new Date(expirationDate);
    console.log(expired);
    if (today <= expired) {
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
