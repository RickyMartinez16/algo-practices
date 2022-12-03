function lowercaseCount(str){
    let count = 0;      //make a count var
  for(let letter of str){       //loop thru the string
    if(letter.match(/^[a-z]/g)){        //if a letter matches a lowercase regex
       count++      //add one to the count
       }
  }
  return count      //return count
}