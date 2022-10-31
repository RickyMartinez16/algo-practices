function noBoringZeros(n) {
  let nArray = String(n).split("");
  console.log(nArray);
  while (nArray[nArray.length - 1] === "0") {
    nArray = nArray.slice(0, nArray.length - 1);
  }
  console.log(nArray);
  return Number(nArray.join(""));
}
