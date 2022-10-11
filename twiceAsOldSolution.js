function twiceAsOld(dadYearsOld, sonYearsOld) {
  let twice = sonYearsOld * 2;      //find twice as old of the summer aka target 
  let difference = dadYearsOld - twice;     //find the difference in years
  return Math.abs(difference);      //return absolute number of difference 
}
