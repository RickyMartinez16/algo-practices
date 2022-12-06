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



  //-------working-----//

  function persistence(num) {
    var count = 0;      //make a var count

    num = num.toString();   //convert num to string
    
    while (num.length > 1) {    //while the length of the string is greater than one
      count++;  //add one to the count
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();   //num is the reduced number of first digit times second digit. while loop checks num again
    }
    
    return times;
 }