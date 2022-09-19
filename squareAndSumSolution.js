function squareSum(numbers){
    let count = 0
    for(let i = 0; i < numbers.length; i++){
      count += numbers[i] **2
    }
    return count
  }