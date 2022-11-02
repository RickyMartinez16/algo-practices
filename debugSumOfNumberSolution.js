function getSumOfDigits(integer) {
    let numberArray = String(integer).split("")     //make the ints a string. split the string into an array
    
    let map = numberArray.map(int => parseInt(int))     //map over the array, and then parse int to turn them into numbers
    
    const sum = map.reduce(
      (previousValue, currentValue) => previousValue + currentValue,    //reduce the map of numbers to one sum
      0
    );
    return sum      //return sum
  }

