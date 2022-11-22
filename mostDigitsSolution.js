//not working//

function findLongest(array){
    let length = 0;
    let longNum = null
    for(let i = 0; i < array.length; i++){
      if(array[i].length > length){
        length = array[i].length;
        longNum = array[i]
      }
    }
    return longNum
  }