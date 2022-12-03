function lowercaseCount(str){
    let count = 0;
  for(let letter of str){
    if(letter.match(/^[a-z]/g)){
       count++
       }
  }
  return count
}