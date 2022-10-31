function noBoringZeros(n) {
  let nArray = String(n).split(""); //turn the input to a string and then split it into an array
  
  while (nArray[nArray.length - 1] === "0") {   //while the end of the array is 0
    nArray = nArray.slice(0, nArray.length - 1);    //slice off the end of the array
  }
  
  return Number(nArray.join(""));   //join the remaining array to a single string and then turn string into a number
}
