function grow(x) {
  let sortedArray = x.sort((a, b) => a - b);        //sort the array
  const sumWithInitial = sortedArray.reduce(
    (previousValue, currentValue) => previousValue * currentValue       //reduce to one value
  );
  return sumWithInitial;
}



//--------------//

const grow=x=> x.reduce((a,b) => a*b);