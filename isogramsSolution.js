function isIsogram(str) {
  let lowerCaseString = str.toLowerCase();      //ignore case so make string lowercase
  let lowerCaseStringArray = lowerCaseString.split("");     //split the string into an array

  for (let i = 0; i < lowerCaseStringArray.length; i++) {       //loop thru array
    if (
      lowerCaseStringArray.indexOf(lowerCaseStringArray[i]) !==     //if the indexOf the array does not equal the last index of the same spot its false and repeats
      lowerCaseStringArray.lastIndexOf(lowerCaseStringArray[i])
    ) {
      return false;
    }
  }
  return true;      //if it completes check its true 
}

//you can use .indexOf() and .lastIndexOf() to determine if an index is repeated. 
//Meaning, if the first occurrence of the character is also the last occurrence, 
//then you know it doesn't repeat. If not true, then it does repeat.




//--------best practice / clever solutions-----------//

function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }

//   The string is converted to a set, so we now have a list of characters which are completely unique (aka no duplicates)

//   Then there's a comparison between the size of the set and the length of the string.
  
//   If the lengths are equal, there's no repeating characters within the string, thus the string is an isogram.



  function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }

//the regex test method validates a string against a given expression. In this case: /(\w).*\1/i

// To break it down:

// The first set of parenthesis is to define a capturing group. Within that group, 
// there is \w - this is to match any word character (basically a-zA-Z0-9_).
// After that, there is a period followed by an asterisk. The period signifies any character at all - 
// whether a letter, number, space, symbol etc. Usually, the engine will stop looking once a 
// single character is found, however, adding the asterisk flag makes the search both optional AND greedy - 
// meaning the engine will keep matching the following character until something doesn't match or the 
// end of the string is reached. The point of this is that there may be other characters inbetween duplicate characters.
// The next part is \1 - this is where the real magic happens. A backslash followed by a number is 
// used to point to the capture group defined earlier (in this case, (\w). Essentially, the engine 
// treats the first matched letter as a variable, and looks for the exact same variable again. If the string 
// only has unique characters, nothing will match because it is explicitly looking for the same character twice.
// The test method returns either true or false if the expression matches something. Since the expression is 
// looking for an instance of a repeating character, and the kata is to test the reverse, we simply invert the resulting boolean.