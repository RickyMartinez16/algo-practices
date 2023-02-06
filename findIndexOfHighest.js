// given an array of integers find and return the index of the highest value in the array

//not all postive input ints

//input
input = [-2, -5, 0, 1, 2, 3];


function findHighestVal() {
    //initizliae a highest variable 
  let highest = -Infinity;

  //loop thru the input
  for (let i = 0; i < input.length; i++) {
      //if the element is greater than highest
    if (input[i] > highest) {
        //input becomes the highest
      highest = input[i];
    }
  }

  //return the index of highest var need to use input arr to use indexOf
  return input.indexOf(highest);
}

//log the answer
console.log(findHighestVal(input))