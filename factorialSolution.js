function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();  //if n is less than 0 or greater than 12 throw new range error
  return n <= 1 ? 1 : n * factorial(n - 1);     //if n is less than or equal to 1 return 1 
                                                //if not n times recursive function factorial but this time n - 1
}

function factorial(n) {
  if (n < 0 || n > 12) throw RangeError();
  var f = 1;
  while (n > 1) f *= n--;
  return f;
}
