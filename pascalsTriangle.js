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
    //start an initial loop to account for all of the rows needed
    for(let i = 0; i < numRows; i++){
        //initialize an empty row (array)
        final[i] = []
        //the first number in each row will always be 1
        final[i][0] = 1
        //start an inner loop that starts at j and will run as long as j is less than i
        for(let j = 1; j < i; j++){
            //the sum of the other values in the row is the spot above to the left (final[i-1][j-1]) and above to the right final[i-1][j]
            final[i][j] = final[i - 1][j - 1] + final[i - 1][j]
        }
        //the last number in each row will always be 1
        final[i][i] = 1
    }
    //return the final pascal array
    return final
};