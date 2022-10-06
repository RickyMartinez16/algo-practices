function uniqueInOrder(iterable) {
  //your code here - remember iterable can be a string or an array
  const result = [];        //empty array for final answer

  for (let i = 0; i < iterable.length; i++) {   //loop thru input
    if (iterable[i] !== iterable[i + 1]) {      //compare each input to the next one
      result.push(iterable[i]);     //if theyre not the same then push the frist one into the final array
    }
  }

  return result;        //return final array    
}


//------//

function uniqueInOrder(it) {
    var result = []
    var last
    
    for (var i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i])
      }
    }
    
    return result
  }