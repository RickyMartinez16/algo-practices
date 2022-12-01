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
    let newArr = []     //make a new array
    for(let i=0; i < array.length-1; i++){      //loop thru array
      newArr.push(array[i]*array[i+1])      //push the sums into the new array
    }  
    return Math.max(...newArr)      //return the biggest number
  }