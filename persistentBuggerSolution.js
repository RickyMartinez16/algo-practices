//not working//

function persistence(num) {

    let stringSplit = String(num).split("")
    
    let realDigits = stringSplit.map(Number)
    if(realDigits.length < 1){
      return 0
    }
    console.log(realDigits.length)
    let count = 0
    
    while(realDigits.length > 1){
      let product = realDigits.reduce(
      (accumulator, currentValue) => accumulator * currentValue,
      0
      );
      let numLength = product.length;
      count++
    }
    return count
  }