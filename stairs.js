// Staircase detail

// This is a staircase of size :

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

// Function Description

// Complete the staircase function in the editor below.

// staircase has the following parameter(s):

// int n: an integer
// Print

// Print a staircase as described above.

// Input Format

// A single integer, , denoting the size of the staircase.

// Constraints

//  .

// Output Format

// Print a staircase of size  using # symbols and spaces.

// Note: The last line must have  spaces in it.

// Sample Input

// 6 
// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######
// Explanation

// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of 


function staircase(n) {
    //start a loop starting with 1 running as long as n
    for (let i = 1; i <= n; i++) {
        //make a var for spaces repeat it n - i number of times
        const spaces = ' '.repeat(n - i);
        //make a var for the hashes and repeat it i times
        const hashes = '#'.repeat(i);
        //prrint stairs
        console.log(spaces + hashes);
    }
}