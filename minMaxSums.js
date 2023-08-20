// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24
// Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// Input Format

// A single line of five space-separated integers.

// Constraints


// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14
// Explanation

// The numbers are , , , , and . Calculate the following sums using four of the five integers:

// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Hints: Beware of integer overflow! Use 64-bit Integer.


function miniMaxSum(arr) {
    //sort the array small to large
    let sort = arr.sort((a, b) => a - b)
    let min = 0
    let max = 0
    let minCount = 0
    let maxCount = 0
    for(let i = 0; i < sort.length; i++){
        min += sort[i]
        minCount++
        if(minCount === 4){
            break
        }
    }
    for(let i = 1; i < sort.length; i++){
        max += sort[i]
        maxCount++
        if(maxCount === 4){
            break
        }
    }
    console.log(min, max)
}