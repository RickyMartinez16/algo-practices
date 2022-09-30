function arrayDiff(a, b) {
  for (let i = 0; i < a.length; i++) {
    //loop thru the first array
    for (let j = 0; j < b.length; j++) {
      //loop thru the second array to cmopare
      if (a[i] === b[j]) {
        //if a[i] is the same as b[j]
        a.splice(i, 1); //splice out that one item
        i--; //make index one less to check again for duplicates
      }
    }
  }
  return a; //return the final a array
}

//----- best practice -----//

function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}


//-----O(n) solution -------//

function array_diff(a, b) {
    b = new Set(b)
    return a.filter(v => !b.has(v))
  }