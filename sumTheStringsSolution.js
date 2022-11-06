function sumStr(a, b) {
  if (!a && b) {            //if no a but b is truthy
    a = 0;      //make a to 0 
    return String(parseInt(a) + parseInt(b));       //add them and then stringy them
  } else if (!b && a) {     //if b is falsy and a is truhy b is 0
    b = 0;
    return String(parseInt(a) + parseInt(b));       //add the numbers and return them as string
  } else if (!a && !b) {
    return "0";
  } else {
    return String(parseInt(a) + parseInt(b));
  }
}


//------best-----//

function sumStr(a,b) {
    return String(Number(a)+Number(b));     //turn a and b into a number and add them and then return them as string
  }