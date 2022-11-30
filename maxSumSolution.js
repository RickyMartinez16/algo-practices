//------not working------//

function adjacentElementsProduct(array) {
    let biggest = 0;
    let sum = 0
    for(let i = 0; i < array.length; i++){
      let j = i + i
      sum = array[i] * array[j]
      if(sum > biggest){
        biggest = sum
      }
    }
    return biggest
  }



  //-------working------//