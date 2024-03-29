// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference
// Input Format

// The first line contains a single integer, , the number of rows and columns in the square matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .

// Constraints

// Output Format

// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

// Note: |x| is the absolute value of x

function diagonalDifference(arr) {
    //keep track of primary daigonal
    let diag1 = 0
    //keep track of seconaday diagonal
    let diag2 = 0
    
    //loop thru the matrix
    for(let i = 0; i < arr.length; i++){
        //primary diag will be the numbers when i and i are the same
        diag1 += arr[i][i]
        //secondary diag will be each row, and then the start in the top right corner and move left
        diag2 += arr[i][arr.length - 1 - i]
    }
    //math.abs returns the absolute difference of two
    return Math.abs(diag1 - diag2)
}