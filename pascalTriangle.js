// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

var generate = function(numRows) {
    //make a final solution return
    var pascal = [];

    //loop the numRows amount
    for (var i = 0; i < numRows; i++) {
        //put a new array into the pascal array
        pascal[i] = [];
        //give the first space in the new array in the pascal array a value of 1
        pascal[i][0] = 1;

        //loop i amount of times
        for (var j = 1; j < i; j++) {
            //make the next amount in the array in the array to be this 
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
        }
        //make next array start a 1
        pascal[i][i] = 1;
    }
    return pascal;
};