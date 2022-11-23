function sumOfDifferences(arr) {
    if(arr.length < 2) return 0     //if the array is less than 2 in length return 0
    let newArray = []   //make a new array var
    let descending = arr.sort((a, b) => b - a)      //sort the input in descending
    for(let i = 0; i < descending.length; i++){     //loop thru descending array
      
      let j = i + 1     //make a j var to get two elements 
      if(j > descending.length - 1) break       //if j is greater than the length of the array youre out of numbers so break the lopp
      let pair = (descending[i] - descending[j])    //find a pair  difference
      
      newArray.push(pair)   //puish the difference in the new array
    }
    return newArray.reduce(     //reduce the new array to add to just one number
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }



  //-----top------//

  function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

//if array length is greater than 2 then return Math.max and spread in the array to get the highest number minus math.min spread array to get lowest number. or return 0