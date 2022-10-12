//-------not working-----//

function removeSmallest(numbers) {
    let newArray =  new Array(...numbers)
    
    let sortedNumbers = newArray.sort(function(a, b){return a-b});
    let array = []
    for(let i = 1; i < sortedNumbers.length; i++){
      array.push(sortedNumbers[i])
    }
    return array
  }

  