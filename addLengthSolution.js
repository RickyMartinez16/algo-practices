function addLength(str) {
    let finalArray = [];
    let splitStr = str.split(" ")
    for(let i = 0; i < splitStr.length; i++){
      finalArray.push(splitStr[i] + " " +  String(splitStr[i].length))
    }
    return finalArray
  }
  