function preFizz(n) {
    let finalArray = [];
    let newInt = 1
    while(n >= newInt){
      finalArray.push(newInt)
      newInt++
    }
    return finalArray
  }