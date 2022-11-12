function largestPairSum (numbers) {
    let sorted = numbers.sort((a,b) => a-b)     //sort input array
    return sorted[sorted.length - 1] + sorted[sorted.length - 2]    //sum the two at the end of array
  }

  //--------------//

  function largestPairSum(numbers){
    numbers.sort(function(a, b){ return b - a });       //same as above but sort in descending order so larger numbers are in front
    return numbers[0] + numbers[1];
  }