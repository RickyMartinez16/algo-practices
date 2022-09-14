function betterThanAverage(classPoints, yourPoints) {
  
    let classTotalPoints = classPoints.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  let average = classTotalPoints / classPoints.length
  if(yourPoints > average){
    return true
  } else {
    return false
  }
}