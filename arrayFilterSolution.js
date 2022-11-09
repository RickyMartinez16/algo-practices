function getEvenNumbers(numbersArray){
    return numbersArray.filter((int => int % 2 ===0))
  }

  const getEvenNumbers = numbersArray => numbersArray.filter(num => num % 2 == 0);