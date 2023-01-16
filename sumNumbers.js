// Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, t
//o keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, 
//while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole 
//numbers from 1 through a given number n.

// Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, 
//he can astonish his teacher and rescue his recreation interval.

// Here's, an example:

// f(n=100) // returns 5050 
// It's your duty to verify that n is a valid positive integer number. 
//If not, please, return false (None for Python, null for C#, 0 for COBOL).

// Note: the goal of this kata is to invite you to think about some 'basic' mathematic formula and how you can do performance optimization on your code. 

// Advanced - experienced users should try to solve it in one line, without loops, or optimizing the code as much as they can.



function f(n){
    //check if the type of n is a number, if its less than zero, if its a whole number. if any fail return false
    if(typeof(n) !== "number" || n <= 0 || n % 1 != 0) return false
    //keep track of total
    let total = 0
    //loop to add every number to total
    for(let i = 1; i <= n; i++){
      total += i
    }
    return total
  };