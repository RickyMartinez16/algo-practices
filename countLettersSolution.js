function strCount(str, letter){  
    let count = 0       //make a count var
    for(let char of str){       //loop thru string
      if (char === letter){     //if char equals letter
        count++     //add one to the count
      }
    }
    return count        //return the count
  }


  // clever

  function strCount(str, letter){  
    return str.split(letter).length-1       //split the string by the letter length minus 1
  }