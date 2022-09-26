function expandedForm(num) {
  var multiple = 10;        //set variable to the multple of 10
  var result = [];      //result is an emprt array
  while (num > 1) {         //while the input num is greater than 1
    var remainder = num % multiple;        //set the remainder of input num and the multiple of 10
    if (remainder > 0) {        //if the remainder is greater than 0
      result.unshift(remainder);        //add remainder to the beginning of the array (unshift)
    }
    num -= remainder;       //number eqauls number - remainder
    multiple = multiple * 10;       //multiple equals multiple times 10
  }
  return result.join(" + ");        //join the array by a + 
}

//-------best prac------//

const expandedForm = (n) =>
  n
    .toString()     //turn input into string
    .split("")      //split the string into an array each letter
    .reverse()      //reverse the order
    .map((a, i) => a * Math.pow(10, i))     //map the array ???????
    .filter((a) => a > 0)
    .reverse()
    .join(" + ");
