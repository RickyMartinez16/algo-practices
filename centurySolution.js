//-------not working------//
function century(year) {
  if (year.toString().length === 2) {
    return 1;
  }
  let last2 = String(year).slice(-2);
  let front2 = String(year).slice(0, 2);
  let hundred = String(year).slice(0, -2);
  console.log(hundred);

  if (Number(last2) === 00) {
    return Number(front2);
  }

  if (year.toString().length > 4 && Number(last2) > 00) {
    return (hundred = Number(hundred) + 1);
  }

  if (Number(last2) > 00) {
    front2 = Number(front2) + 1;
  }
  return Number(front2);
}

//---working-----//

function century(year) {
  let centuryCount = 0;
  while (year > 0) {
    year = year - 100;
    centuryCount = centuryCount + 1;
  }
  return centuryCount;
}

//------best practice-----//

function century(year) {
  return Math.ceil(year / 100); //using ceiling method to round up to nearest century (100)
}
