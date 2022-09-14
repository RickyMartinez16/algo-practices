function betterThanAverage(classPoints, yourPoints) {
  
    let classTotalPoints = classPoints.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );        //add all the class points together to get one value using .reduce array method
  let average = classTotalPoints / classPoints.length   //calculayte the average dividing total by how many students 
  if(yourPoints > average){     //check if your points is greater than average then return true
    return true 
  } else {      //if not return false
    return false
  }
}


//--------best practice solution----------//

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }