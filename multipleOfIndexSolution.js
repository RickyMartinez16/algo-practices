function multipleOfIndex(array) {
    let finalArray = [];            //make an empty array var
    for(let i = 0; i < array.length; i++){      //loop thru the input array
      if(array[i] % i === 0){       //if each index is divisiable by the current index
        finalArray.push(array[i])   //push it into the final array
      }
    }
    return finalArray
  }



  //------best------//

  function multipleOfIndex(array) {
    return array.filter((num, i) => num % i === 0);     //filter the array numbers that are divisible by their index
  }