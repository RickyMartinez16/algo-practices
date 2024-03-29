// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

 

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


var diagonalSum = function (mat) {
    //keep track of the sum
    let sum = 0
    //make a var for n to know how far to travel in array
    let n = mat.length - 1
    //loop 
    for (let i = 0; i <= n; i++) {
        //add to the sum the ith element of the ith array
        sum = sum + mat[i][i]
        //if i does no equal length - i
        if (i !== (n - i)) {
            //then add the n - ith element of the ith array
            sum = sum + mat[i][n - i]
        }
    }
    return sum
};