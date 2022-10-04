function sumArray(array) {
  if (!array) {     //check condition if array is empty return 0
    return 0;
  }
  let sortedArray = array.sort((a, b) => a - b);    //sort the array to a var
  
  let newArray = sortedArray.slice(1, sortedArray.length - 1);      //create new array without first and last number
  const sumWithInitial = newArray.reduce(               //reduce the array to one number
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return sumWithInitial;        //return the reduced number
}
