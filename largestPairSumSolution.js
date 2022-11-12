function largestPairSum (numbers) {
    let sorted = numbers.sort((a,b) => a-b)     //sort input array
    return sorted[sorted.length - 1] + sorted[sorted.length - 2]    //sum the two at the end of array
  }