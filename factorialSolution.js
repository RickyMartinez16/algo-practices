function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}

function factorial(n) {
  if (n < 0 || n > 12) throw RangeError();
  var f = 1;
  while (n > 1) f *= n--;
  return f;
}
