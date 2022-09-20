function findOdd(A) {
  let count = 0;        //set count var number of times an int will occur
  for (let i = 0; i < A.length; i++) {  //loop thru array
    for (let j = 0; j < A.length; j++) {    //loop thru array to compare number to each number in array
      if (A[i] === A[j]) {      //if the numbers are the same
        count++;        //add them to the count 
      }
    }
    if (count % 2 != 0) {       //if the count is an odd number return the number 
      return A[i];
    }
  }
}
