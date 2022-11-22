function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2).sort((a, b) => a -b )
  //   let sorted = finalArray.sort(function(a, b){return a-b});
   
  }

  //------working-----//

  function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
  }
  //make an array from a new set then takes in the concated arrays sorted


  function mergeArrays(a, b) {
    return [...new Set(a.concat(b))].sort((a,b)=>a-b)
  }

  //spread a new set that takes in a concated array sorted