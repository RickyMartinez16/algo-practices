// We have a few cases where we can immedietly stop looking for validity of the string.

// Whenever string has an odd number of items, it's impossible to fidd a pair, so return false.

// If very first item is a closing bracket, we know that we'll never find a pair for it, so return false.

// Now, the meat of the solution. We need a way to keep track of visited brackets and a way to clear them when their pair has been found. Simple stack should do (in the implementation bellow, I am using an array to act as a stack).

// For simiplicity, let's also define a pairs map, where opening bracket is a key, and closing bracket is the value.

// Steps:

// If lenght of the string is odd, return false
// If first bracket is closing, return false
// If last bracket is an opening one, return false
// Loop over the string
// If bracket is an opening bracket, push it on top of the stack
// If bracket is a closing bracket, check if the top of the stack is matching with it's pair.
// If no match is found, it's impossible to close the bracket so return false
// Finally, if stack is empty, string is valid

//make an pairs object to make the key values
const pairs = {
    "(": ")",
    "{": "}",
    "[": "]"
}

function isValid(s){

    //check if input is odd
    if(s.length % 2 === 1) return false;
    //check if first input is a closing brack
    if(s[0] === ")" || s[0] === "}" || s[0] === "]") return false;
    //check if last bracket is an opening bracket
    if(s[s.length - 1] == "(" || s[s.length - 1] =="{" || s[s.length - 1] =="[") return false
    

    let stack = [];

    for(let i = 0; i < s.length; i++){
        if(s[i] == "(" || s[i] == "{" || s[i] == "["){
            stack.push(s[i])
        } else if (pairs[stack.pop()] !== s[i]){
            return false 
        }
    }
    return stack.length === 0

}
