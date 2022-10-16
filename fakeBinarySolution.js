function fakeBin(x) {
  let string = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      string += "0";
    } else {
      string += "1";
    }
  }
  return string;
}
