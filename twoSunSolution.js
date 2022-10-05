function twoSum(numbers, target) {
  //given a target number get two numbers in the input array of numbers to equal the target
  let finalArray = [];      //set empty array to put ifinals into
  for (let i = 0; i < numbers.length; i++) {        //loop thru numbers
    for (let j = i + 1; j < numbers.length; j++) {      //loop thru again to compare j = i + 1 to compare the next index
      if (numbers[i] + numbers[j] === target) {     //if the two numbers added up equal the target but those indexs in final array
        finalArray.push(i, j);
        return finalArray;
      }
    }
  }
}
