// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power 
//(ie multiplies number by itself power times).

// Examples
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000
// Note: Math.pow and some other Math functions like eval() and ** are disabled.


function numberToPower(number, power){
    //keep track of total
    var total = 1;
    //loop for as long as i is less than or equal to power to get amonut of powers
    for (var i = 1; i <= power; i++) { 
        //total is total times number
      total = total * number;
    }
    return total;
  }