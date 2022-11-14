function evenNumbers(array, number) {
    
    let even = array.filter(number => number % 2 === 0) //filter the even numbers into an array
    
    return even.slice(-Math.abs(number))    //slice off the last Number of items
  }