// Given a mixed array of number and string representations of integers, 
//add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.

function divCon(x){
    //keep track of number value
    let numValue = 0;
    //keep track of string value
    let strValue = 0;
    

    //loop thru input array
    for(let i = 0; i < x.length; i++) {
        //if the type of element is string
      if(typeof(x[i]) === 'string' ) {
          //add to the string value


        // The parseFloat() function parses a string argument and returns a floating point number. can use parseInt
        strValue += parseFloat(x[i]);
        //else if its type is number
      } else if(typeof(x[i]) === 'number' ) {
          //add to the number value
        numValue += x[i];
      }
    }

    //numval minus str val
    return numValue - strValue;
  }