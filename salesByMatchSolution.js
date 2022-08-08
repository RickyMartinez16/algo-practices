function sockMerchant(n, ar) {
  let pairs = 0;  //set counter for pairs

  const maps = new Map(); // make a new empty map
  for (let i = 0; i < ar.length; i++) {    //loop thru the array
    if (maps.has(ar[i])) {    //if the map has the number already
      maps.delete(ar[i]);    //delete the number
      pairs++;                 // and had one to the pairs counter
    } else {
      maps.set(ar[i]);   //if the map doesnt have the number a lready then add it in the map
    }
  }
  return pairs;        // return the total number of pairs
}
