// turn vowels into numbers
function encode(string){
    return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
  }

  //return a strin replaceing all the vowels with the index of x
  
  //turn numbers back into vowels
  function decode(string){
    return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
  }

  //return a strin replaceing all the nums with the charAt x


  function encode(string){
    var vowelMapping = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};        //make a vowel map
    return codeStringGivenMapping(string, vowelMapping); //use helper function
  }
  
  function decode(string){
    var vowelMapping = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};      //make a number map
    return codeStringGivenMapping(string, vowelMapping);    //return helper function
  }
  
  function codeStringGivenMapping(string, mapping){     //helper function that takes the string and map
    return string.split('').map(function(char){     //split the string then map over it. take each character and return the mapped char or character if none avail.
      return mapping[char] || char;
    }).join('');    //then join
  }