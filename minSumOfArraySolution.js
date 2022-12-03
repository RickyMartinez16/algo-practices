function minSum(arr) {
    //biggest times smallest
    
    let newArray = [];
    let sortedArray = arr.sort((a, b) => a - b)
    
    let j = sortedArray.length - 1
    for(let i = 0; i < sortedArray.length; i++){
      
      
      let num = sortedArray[i] * sortedArray[j]
      console.log(sortedArray[i], sortedArray[j])
      
      newArray.push(num);
      
      j--
      if(newArray.length == sortedArray.length /2) break
    }
    const sum = newArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum
  }