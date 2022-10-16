function fakeBin(x) {
  let string = "";      //set an empty string
  for (let i = 0; i < x.length; i++) {      //loop thru input string
    if (x[i] < 5) {     //if the selected letter in the string is less than 5
      string += "0";        //add 0 to the string
    } else {
      string += "1";        //if its greater than 5 add 1 to the string
    }
  }
  return string;        //return final string
}


//-------best-----//

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

//split the string, map over the new split array. n is each letter. if n is less than 5 return 0, else return 1. then join the array to make string