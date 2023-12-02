// Given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non-space characters.

 

// Example 1:

// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
// Example 2:

// Input: s = "Hello"
// Output: 1
 

// Constraints:

// 0 <= s.length <= 300
// s consists of lowercase and uppercase English letters, digits, or one of the following characters "!@#$%^&*()_+-=',.:".
// The only space character in s is ' '.


var countSegs = function(s){
    //check if the input is empty if so return 0
    if (!s) return 0;

    //get rid of all leading and trailnig white space with trim()
    let input = s.trim();
    //if the input length is now 0 then return 0
    if (input.length === 0) return 0;

    // Split by one or more spaces
    //if space or consectuive space split there instrad of just " "
    let sSplit = input.split(/\s+/);

    // Filter out empty segments
    // if its a non empty seg get rid of it
    let nonEmptySegments = sSplit.filter(segment => segment !== '');

    return nonEmptySegments.length;
}
