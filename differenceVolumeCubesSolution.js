function findDifference(a, b) {
  const sumA = a.reduce(        //reduce the first array
    (previousValue, currentValue) => previousValue * currentValue,
    1
  );
  console.log(sumA);
  const sumB = b.reduce(        //reduce the second array
    (previousValue, currentValue) => previousValue * currentValue,
    1
  );
  console.log(sumB);
  return Math.abs(sumA - sumB);     //absolute value so its alwasy positive diffrence of the two arrays
}


//one liner--------//

function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
  }