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