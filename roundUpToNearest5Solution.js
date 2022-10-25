function roundToNext5(n) {
  while (n % 5 !== 0) {
    //while the remainder of n divideed by 5 does not eqaul 0
    n++; //add one to n
  }
  return n; //return the final n
}

//-------best------//

function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}
