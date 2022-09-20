String.prototype.toJadenCase = function () {
    var newStr = "";
    
    this.split(" ").forEach(function(s) { 
        newStr = newStr + " " + s.substring(0,1).toUpperCase() + s.substring(1); 
    });
  
    return newStr.substr(1);
  }


// We first split the words in the given string after each " " space is detected (in the split(" ") )
// And then we apply the map method which calls the function word . (map applies what happens in the function to each and every item in the array which has been split from the given string.

// In the function word = Each item of the array is taken and the first letter which is index value 0 ( charAt(0) ) is converted to Upper Case and is concatenated with the rest of the letters of the word (excluding the first letter (word.slice(1))

// Then using the Join method all the words are joined to make a sentence

// Thus it returns the sentence with the First letter of each word Capitalized

String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }