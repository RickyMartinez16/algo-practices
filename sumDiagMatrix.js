// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on
// the secondary diagonal that are not part of the primary diagonal.

 

// Example 1:


// Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.
// Example 2:

// Input: mat = [[1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1]]
// Output: 8
// Example 3:

// Input: mat = [[5]]
// Output: 5


var diagonalSum = function(mat) {
    //keep track of the final sum
    let count = 0;
    //last row/colum
    let length = mat.length - 1

    //loop thru the matrix
    for(let i = 0; i <= length; i++){
        //count will add all [i][i] because thats the first diag
      count += mat[i][i]
      if(i !== (length - i)){
        count += mat[i][length - i]
      }
    }
    return count
};