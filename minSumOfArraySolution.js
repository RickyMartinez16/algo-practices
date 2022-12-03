function minSum(arr) {
    //biggest times smallest
    
    let newArray = [];      //make a new arrat var
    let sortedArray = arr.sort((a, b) => a - b)     //sort the input array
    
    let j = sortedArray.length - 1      //make a j var
    for(let i = 0; i < sortedArray.length; i++){        //loop thru sorted array
      
      
      let num = sortedArray[i] * sortedArray[j] //find a number to push into new array. smallest times biggest
    
      newArray.push(num);   //pish the product into the new array
      
      j--   //interate j to minus 1
      if(newArray.length == sortedArray.length /2) break    //if the array length is the same as half the array break 
    }
    const sum = newArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum  //reduce the new array and return
  }