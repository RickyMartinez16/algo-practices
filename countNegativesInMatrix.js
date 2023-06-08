// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

 

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0

var countNegatives = function(grid) {
    //keep track of count
    let count = 0;
    //loop thru array of arrays
    for(let i = 0; i < grid.length; i++){
        //loop thru each element in each array
      for(let j = 0; j < grid[i].length; j++){
        if(grid[i][j] < 0){
          count++
        }
      }
    }
    return count
};