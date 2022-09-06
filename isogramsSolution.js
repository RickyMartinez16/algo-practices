function isIsogram(str){
    let lowerCaseString = str.toLowerCase();
    let lowerCaseStringArray = lowerCaseString.split("");
    
    for(let i = 0; i < lowerCaseStringArray.length; i++){
      if(lowerCaseStringArray.indexOf(lowerCaseStringArray[i]) !== lowerCaseStringArray.lastIndexOf(lowerCaseStringArray[i])){
        return false
      }
    }
    return true
  }