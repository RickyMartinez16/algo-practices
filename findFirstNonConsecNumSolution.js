function firstNonConsecutive (arr) {
  for(let i = 0; i < arr.length; i++){
    let number = arr[i];
    if(number + 1 !== arr[i + 1]){
      return arr[i + 1]
    }
//     if(number + 1 == arr[i + 1]){
//       return null
//     }
  }
}


//-----working-----//

function firstNonConsecutive(arr) {
  // Initialize default value to increment
  let previous = arr[0];
  // Establish a variable to collect the non consecutive integer
  let first;
  for (let i = 1; i < arr.length; i++) {
    // If prev value is not equal to the next element array val
    if (previous + 1 !== arr[i]) {
      // You've found your first non consecutive and break
      first = arr[i];
      break;
    }
    previous++;
  }
  // return null if first is never set
  return first !== undefined ? first : null;
}

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}
