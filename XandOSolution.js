function XO(str) {
  let o = (str.toLowerCase().split("").sort().join("").match(/[o]/g) || [])     //count the number of oS
    .length;
  let x = (str.toLowerCase().split("").sort().join("").match(/[x]/g) || [])     //count the number of Xs
    .length;
  if (x === o) {    //if theyre the same return true
    return true;
  } else {
    return false;       //else return false
  } 
}
