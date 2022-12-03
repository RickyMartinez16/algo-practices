function strCount(str, letter){  
    let count = 0       //make a count var
    for(let char of str){       //loop thru string
      if (char === letter){     //if char equals letter
        count++     //add one to the count
      }
    }
    return count        //return the count
  }