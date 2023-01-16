// Jamie is a programmer, and James' girlfriend. 
//She likes diamonds, and wants a diamond string from James. 
//Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, 
//using asterisk (*) characters. Trailing spaces should be removed, 
//and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond (n) {
    //check if the diamond is greater than 0 and not even if so return null
    if (n <= 0 || n % 2 === 0) return null
    //make a var to hold the diamond string
    let str = ''

    //loop 
    for (let i = 0; i < n; i++) { 
        //let the length equal Math.abs (always postive) of n - 2 times i - 1 then divide by 2
      let len = Math.abs((n-2*i-1)/2)
      //add the spaces to the string repeat it len times
      str += ' '.repeat(len)
      //add the stars to the string repeat it len times
      str += '*'.repeat(n-2*len)
      //add one space break to the string
      str += '\n'
    }
    //return final
    return str
  }

  //This code defines a function called "diamond" which takes an input "n" and 
  //returns a string of characters that form a diamond shape when printed. 
  //The function first checks if the input "n" is less than or equal to 0 or if "n" is an even number, 
  //and if either of these conditions are true, the function returns "null". 
  //If the input is valid, the function creates an empty string called "str" 
  //and uses a for loop to iterate "n" number of times.

//In each iteration, the variable "len" is assigned the value of the absolute 
//value of the result of subtracting 2 times the current loop variable "i" from 1, 
//and then dividing that by 2. The variable "str" is then appended with a string of 
//spaces that is "len" characters long, followed by a string of "*" characters that 
//is "n" minus 2 times "len" characters long. Finally, a new line character is appended to "str", and the loop continues.

//After the for loop has completed, the function returns the final 
//value of "str" which will be a string of characters that form a diamond shape.