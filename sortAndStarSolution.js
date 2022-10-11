function twoSort(s) {
  let sorted = s.sort();        //sort the input
  let first = sorted[0];        //grab first one

  let firstSplit = first.split("");     //split the first one

  let final = firstSplit.join("***");   //join by ***

  return final; // return final
}

function twoSort(s) {
  let sorted = s.sort(); //sort input

  return sorted[0].split("").join("***");       //first, split, join
}

function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }