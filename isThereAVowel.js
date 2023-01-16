// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.



const isVow = a =>{
    //make an object of the number codes with the values being the letters respectively 
    let map = {
      97: 'a',
      101: 'e',
      105: 'i',
      111: 'o',
      117: 'u',
    }
    //return an map of  the input array that takes each number and cheks if the number is in the object if yes return the letter into the array if not just pus the number
    return a.map( num => map[num] ? map[num] : num);
  }