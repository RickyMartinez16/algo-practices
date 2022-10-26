function smallEnough(a, limit) {
  for (let i = 0; i < a.length; i++) {      //loop thru array
    if (a[i] > limit) {     //if a[i] is greater than limit return false
      return false;
    }
  }
  return true;      //if loop completes return true
}
