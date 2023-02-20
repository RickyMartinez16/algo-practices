// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"


//partial working-----------------


function calculate(str) {
    console.log(str.split("plus"))
    let splitPlus = str.split("plus")
    let numbersMap = splitPlus.map((element) => Number(element))
    console.log(numbersMap)
    
    const sum = numbersMap.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    
    return String(sum)
  }


  //-----working

  function calculate(str) {

    return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
  }