function removeEveryOther(arr) {
  let finalArray = [];      //empty array var

  for (let i = 0; i < arr.length; i = i + 2) {  //loop thru the array and skip every other
    finalArray.push(arr[i]);        //push every other into final array 
  }
  return finalArray;
}
