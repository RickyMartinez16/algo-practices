//-----not working-----//

function countPositivesSumNegatives(input) {
  let finalArray = [];
  let positiveArray = [];
  let negCount = 0;
  let posLength = 0;

  if (input.length === 0) {
    return [];
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positiveArray.push(input[i]);
    } else if (input[i] < 0) {
      negCount += input[i];
    }
  }
  console.log(positiveArray.length);

  return [positiveArray.length, negCount];
}


//----working---//

function countPositivesSumNegatives(input) {
    let positiveNums = 0;
    let negativeNums = 0;
    if (input === null || input.length === 0) {
      return [];
    } else {
      input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
    }
    return [positiveNums , negativeNums];
}

//-------------//

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}