// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.\


var findAverage = function (nums) {
    
    //reduce the input array to get one number
    const reduced = nums.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
        0
    );
    
    //return reduced by length of input to get mean
    return reduced / nums.length
  }