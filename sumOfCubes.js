// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)


function sumCubes(n){
    //make var to keep track of final sum
    let sum = 0;
    //make var to keep track of cube
    let cube 
    //make loop to get all the numbers 1 to n
    for(let i = 1; i <= n; i++){
        //make a cube
      cube = Math.pow(i, 3);
      //add the cube to sum
      sum += cube
    }
    return sum
  }