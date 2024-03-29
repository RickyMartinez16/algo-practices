// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
 

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

// Constraints:

// 1 <= n <= 104


var fizzBuzz = function(n) {
    //final array to store the answres
    let array = []

    //loop starting at number 1
    for(let i = 1; i <= n; i++){
        //if remainder of 1 / 3 is 0 AND remainder of 1 / 5 is 0
        //have to do this first
        //more specific IFs first
        if(i % 3 === 0 && i % 5 === 0){
            //push fizzbuzz
            array.push("FizzBuzz")
            //else if remainder of i / 3 is 0
        } else if(i % 3 === 0){
            //push fizz
            array.push("Fizz")
            //else if remainder of i / 5 is 0
        } else if(i % 5 === 0){
            //push buzz
            array.push("Buzz")
        } else {
            //else turn i intro a string and push that
            array.push(String(i))
        }
    }
    //return the final array
    return array
};