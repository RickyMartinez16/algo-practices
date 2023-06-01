// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

 

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// Example 2:

// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
// Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.
// Example 3:

// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".


var balancedStringSplit = function(s) {
    //keep track the final number of matches
    let matches = 0;
    //keep the L and R balance
    let balance = 0;

    //loop thru the input string
    for(let i = 0; i < s.length; i++){
        //if the ith letter is an R
      if(s[i] === "R"){
          //take away one from the balance
        balance -= 1
        //if the ith letter is an L
      } else if (s[i] === "L"){
          //add one to the balance
        balance += 1
      }
      //if the balance is ever at 0 then the sides are equal
      if(balance === 0){
          //so add one to the matches count
        matches++
      }
    }
    return matches
};