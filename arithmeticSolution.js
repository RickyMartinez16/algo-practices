function arithmetic(a, b, operator){
  
    if(operator === "add"){
        return a + b
    } else if (operator === "subtract"){
      return a - b
    } else if (operator === "multiply"){
      return a * b
    } else {
      return a / b
    }
  }
//check for each one and then do it with if else 

  //------best------//

  const arithmetic = (a, b, operator) => ({
    'add'     : a + b,
    'subtract': a - b,
    'multiply': a * b,
    'divide'  : a / b
  }[operator]);

  //make object with key val