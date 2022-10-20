function gimme(a) {
  return a.indexOf(
    a.concat().sort(function (a, b) {
      return a - b;
    })[1]
  );
}

const gimme = function (arr) {
  return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
};


