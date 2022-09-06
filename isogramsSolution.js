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
