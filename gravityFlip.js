// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

// Examples (input -> output:
// * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

const flip=(d, ar)=>{
    if(d === "L"){
      return ar.sort((a, b) => b-a )
    } else {
      return ar.sort((a, b) => a-b)
    }
   }