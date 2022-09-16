function XO(str) {
  let o = (str.toLowerCase().split("").sort().join("").match(/[o]/g) || [])
    .length;
  let x = (str.toLowerCase().split("").sort().join("").match(/[x]/g) || [])
    .length;
  if (x === o) {
    return true;
  } else {
    return false;
  }
}
