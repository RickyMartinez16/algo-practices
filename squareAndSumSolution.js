function squareSum(numbers){
    let count = 0
    for(let i = 0; i < numbers.length; i++){
      count += numbers[i] **2
    }
    return count
  }


  function squareSum(numbers) {
    let sum = 0
    numbers.forEach( number => {
        sum += (number * number)
    })
    return sum
}


//https://losseff.xyz/katas/013-squeare-sum/javascript/