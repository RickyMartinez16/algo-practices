function twoSum(numbers, target) {
  //given a target number get two numbers in the input array of numbers to equal the target
  let finalArray = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        finalArray.push(i, j);
        return finalArray;
      }
    }
  }
}
