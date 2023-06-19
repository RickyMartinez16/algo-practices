// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. 
//There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. 
//If such a character does not exist, return the first character in letters.

 

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
// Example 2:

// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
// Example 3:

// Input: letters = ["x","x","y","y"], target = "z"
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].



var nextGreatestLetter = function(letters, target) {
    //the left side of the letters array
    let left = 0;
    //the right side of the letters array
    let right = letters.length - 1;
    
    //check if the target letter is greater than or equal to the last letter in the array. 
    if (target >= letters[right]) {
        //if true there are no possible letters greater. return letters[0]
      return letters[0];
    }
    
    //while the left index is less than or equal to the right index
    while (left <= right) {
        //let the mid index equal mathFloor right plus left divived by 2
      let mid = Math.floor((left + right) / 2);
      
      //check if the middle letter is less than or equal to the target letter. if true
      if (letters[mid] <= target) {
          //the left side of the array is now mid + 1
        left = mid + 1;
      } else {
          //if not the right side of the array is now mid - 1
        right = mid - 1;
      }
    }
    
    return letters[left];
  };

//   We continue this process until left becomes greater than right, indicating that we have found the correct index.
// Finally, we return letters[left], which is the smallest character greater than the target.