function pipeFix(numbers) {
  var first = numbers[0];       //first at first int
  var last = numbers[numbers.length - 1];       //find last int

  var arr = [];     //make a new array
  for (var i = first; i <= last; i++) {     //loop thru starting at first and going until i eqauls last
    arr.push(i);        //push every int into new array
  }
  return arr; //return the full array
}
