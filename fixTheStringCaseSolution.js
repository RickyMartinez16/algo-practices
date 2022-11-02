//not working//

function solve(s) {
  let uppercase = s.match(/^[A-Z]/g);
  console.log(uppercase);

  let lowercase = s.match(/^[a-a]/g);
  console.log(lowercase);

  if (uppercase && lowercase) {
    if (uppercase.length > lowercase.length) {
      var modified = s.replace(/^[A-Z]/g, function (match) {
        return match.toLowerCase();
      });
    }
  }

  if (uppercase && lowercase) {
    if (uppercase.length < lowercase.length) {
      var modified = s.replace(/^[a-z]/g, function (match) {
        return match.toUpperCase();
      });
    }
  }

  if (uppercase.length === lowercase.length) {
    return s.toLowerCase();
  }
}


//------------working-----------//

function solve(s){
    let lowerC = 0;     //set var to count the lower case letters
    let upperC = 0;     //set var to count the upper case letters
    for( let i = 0; i < s.length; i++){     //loop thru the string
      if( s[i] == s[i].toUpperCase()){      //if the letter is the same as the letter in uppercase
        upperC++;                           // add one to the uppercase count
      }
      else{
        lowerC++;                           //else add one to the lowercase count
      }
    }
    return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()     //if lowercase is greater or equal than uppercase count change everythingto lowercase. if not go to uppercase
}