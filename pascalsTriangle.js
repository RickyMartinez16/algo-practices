// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:



// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]


var generate = function(numRows) {
    //house the final triangle
    let final = []
    for(let i = 0; i < numRows; i++){
        final[i] = []
        final[i][0] = 1
        for(let j = 1; j < i; j++){
            final[i][j] = final[i - 1][j - 1] + final[i - 1][j]
        }
        final[i][i] = 1
    }
    return final
};