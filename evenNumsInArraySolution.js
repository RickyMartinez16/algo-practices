function evenNumbers(array, number) {
    let evenArray = []
    
    let even = array.filter(number => number % 2 === 0)
    
    return even.slice(-Math.abs(number))
  }