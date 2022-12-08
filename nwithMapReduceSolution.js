const input = 6;

const array = new Array(input).fill(null);
// array is [null, null, null, null, null, null] aka null n times

console.log(array.map((cur, index) => {
     return index + 1
}))

array
  .map(function (currentValue, index) {     //maps over the null array and replaced null values with index place + 1
    return index + 1;
  })
  .reduce(function (accumulator, currentValue) {        //then reduces the array to one value
    return accumulator * currentValue;
  });