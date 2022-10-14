//-------not working-----//

function removeSmallest(numbers) {
    let newArray =  new Array(...numbers) //tried putting the numers into a new array to not mess up the original array
    
    let sortedNumbers = newArray.sort(function(a, b){return a-b});
    let array = []
    for(let i = 1; i < sortedNumbers.length; i++){
      array.push(sortedNumbers[i])
    }
    return array
  }

  //------working------//

  function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));     //find the min using indexOf and Math.min. spread array into math min. finds smallest int.
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }

  //slice out the min(two numbers in the slice), and add the rest of the array (only one number in the slice)