var number = function (array) {
  let number = 1;   //set the prepend
  let finalArray = [];      //make a final array
  for (let i = 0; i < array.length; i++) {      //loop thru the input array
    finalArray.push(number + ": " + array[i]);  //push the correct prepend into array
    number += 1;        //add to the number var
  }
  return finalArray;        //return final array
};


//-------best practice-----//

var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }