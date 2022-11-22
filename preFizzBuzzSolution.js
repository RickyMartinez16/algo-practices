function preFizz(n) {
    let finalArray = [];  //nset new array var empty
    let newInt = 1      //make a int to push
    while(n >= newInt){     //while n is less than or equal to new int
      finalArray.push(newInt)       //push the new int into the array
      newInt++      //add one to the array
    }
    return finalArray       //return final array
  }