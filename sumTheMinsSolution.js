function sumOfMinimums(arr) {
  let count = 0;    //make a count var
  for (let i = 0; i < arr.length; i++) {    //loop thru the arrays
    count += Math.min(...arr[i]);   //count eqauls plus the min number in each array
  }
  return count; //return final count
}
