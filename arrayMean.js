// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.\


var findAverage = function (nums) {
    const initialValue = 0;
    const reduced = nums.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
        initialValue
    );
    
    return reduced / nums.length
  }