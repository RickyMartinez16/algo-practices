function stray(numbers) {
  let sorted = numbers.sort(function (a, b) {       //sort the input array
    return a - b;
  });
  if (sorted[0] === sorted[1]) {        //if the first two numbers are the same 
    return sorted[sorted.length - 1];   //return the last number
  } else {
    return sorted[0];       //if not return the first number
  }
}
