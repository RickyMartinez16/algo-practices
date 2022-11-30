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

  function adjacentElementsProduct(array) {
    let newArr = []
    for(let i=0; i < array.length-1; i++){
      newArr.push(array[i]*array[i+1])
    }  
    return Math.max(...newArr)
  }