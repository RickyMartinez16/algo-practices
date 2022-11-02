//passing some tests but not all//

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode == correctCode) {
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
