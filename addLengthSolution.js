function addLength(str) {
    let finalArray = [];        //make an empty array var
    let splitStr = str.split(" ")   //split the input string to indiviual words
    for(let i = 0; i < splitStr.length; i++){       //loop thru the split array
      finalArray.push(splitStr[i] + " " +  String(splitStr[i].length))      //push the string plus the lenfth of each word into final
    }
    return finalArray       //return finalarray
  }
  