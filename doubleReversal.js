// Reversing an integer means to reverse all its digits.

// For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

 

// Example 1:

// Input: num = 526
// Output: true
// Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.
// Example 2:

// Input: num = 1800
// Output: false
// Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.
// Example 3:

// Input: num = 0
// Output: true
// Explanation: Reverse num to get 0, then reverse 0 to get 0, which equals num.

function isSameAfterReversals(num) {
    //if the number is a 0 its true
    if(num == 0) return true
    //if the number is divisble by 10 that means it will have leading zeros so it wont be the same
    if(num % 10 == 0) return false
    //if it doesnt have any trailing zeros or is zero it will be true
    return true
  }