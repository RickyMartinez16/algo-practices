function getSumOfDigits(integer) {
    let numberArray = String(integer).split("")
    
    let map = numberArray.map(int => parseInt(int))
    
    const sum = map.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    return sum
  }