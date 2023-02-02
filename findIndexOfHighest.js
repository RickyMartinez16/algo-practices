// given an array of integers find and return the index of the highest value in the array

//not all postive input ints

input = [-2, -5, 0, 1, 2, 3];

function findHighestVal() {
  let highest = -Infinity;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > highest) {
      highest = input[i];
    }
  }
  return input.indexOf(highest);
}


console.log(findHighestVal(input))