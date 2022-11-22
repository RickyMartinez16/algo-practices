function multipleOfIndex(array) {
    let finalArray = [];
    for(let i = 0; i < array.length; i++){
      if(array[i] % i === 0){
        finalArray.push(array[i])
      }
    }
    return finalArray
  }