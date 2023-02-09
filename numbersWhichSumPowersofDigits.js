// Not considering number 1, the integer 153 is the first integer having this property: 
//the sum of the third-power of each of its digits is equal to 153. Take a look: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153

// The next number that experiments this particular behaviour is 370 with the same power.

// Write the function eq_sum_powdig(), that finds the numbers below a given upper limit hMax (inclusive) 
//that fulfills this property but with different exponents as  the power for the digits.

// eq_sum_powdig(hMax, exp): ----> sequence of numbers (sorted list) (Number one should not be considered).

// Let's see some cases:

// eqSumPowdig(100, 2) ----> []

// eqSumPowdig(1000, 2) ----> []

// eqSumPowdig(200, 3) ----> [153]

// eqSumPowdig(370, 3) ----> [153, 370]


function eqSumPowdig(hMax, exp) {

    //make final array
    var result = [];
    
    //check if the hMax is less than 153 becuase 153 is the smallest possible answer, return empy array if so
    if (hMax < 153) return result;
    
    //loop with i starting at 153, will add 1 to it each loop
    for(var i = 153; i <= hMax; i++) {

        //make an hMaxi variable to turn the i to a string 
      var hMaxi = i.toString();

      //keep track of the sum var
      var sum = 0;
      
      //make another loop, run it for each number in the hMaxi to power each number
      for(var j = 0; j < hMaxi.length; j++) {
          //sum each number of the maxi to the power of exp input parse int to get the number out of the string
        sum += Math.pow(parseInt(hMaxi[j]), exp);
      }

      //if the sum is the same as the i push the sum into the result var
      if (sum === i) result.push(sum);
    }

    //return final result array
  return result;
}