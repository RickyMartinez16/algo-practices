//not working//

function persistence(num) {

    let stringSplit = String(num).split("")
    
    let realDigits = stringSplit.map(Number)
    if(realDigits.length < 1){
      return 0
    }
    console.log(realDigits.length)
    let count = 0
    let digitsLength = realDigits.length
    
  
      let product = realDigits.reduce(
      (accumulator, currentValue) => accumulator * currentValue,
      0
      );
      digitsLength = product.length;
      count++
    
      if(digitsLength > 1){
        persistence(product)
      }
    
    return count
  }