function squareDigits(num) {
  return Number(        //turn everything after this into a number
    ("" + num)      //empty string plus the number
      .split("")    //split the number to get each int of num in an array
      .map(function (val) {     //map over the split array and return the value times value for square
        return val * val;
      })
      .join("")     //join them all into a string
  );
}

function squareDigits(num) {
  var array = num       //make an array using the num 
    .toString()         //turn num into a string
    .split("")          //split the string to make an array of each value
    .map(function (int) {       //make a new array with map taking each int
      var val = parseInt(int);        //get the value of each stringed int
      return val * val;     //return the sqaure number into the new map
    });

  return parseInt(array.join(""));      //join the array and parse int to get the number values of the strings
}
