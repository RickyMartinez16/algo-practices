function expandedForm(num) {
  var multiple = 10;
  var result = [];
  while (num > 1) {
    var remainder = num % multiple;
    if (remainder > 0) {
      result.unshift(remainder);
    }
    num -= remainder;
    multiple = multiple * 10;
  }
  return result.join(" + ");
}

//-------best prac------//

const expandedForm = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(" + ");
