function gimme(a) {
  return a.indexOf(
    a.concat().sort(function (a, b) {
      return a - b;
    })[1]
  );
} 

//find trhe index of the sorted array index 1 in a

const gimme = function (arr) {
  return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
};

//spred operator
//find trhe index of the sorted array index 1 in a