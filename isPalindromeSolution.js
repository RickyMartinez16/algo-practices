const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase()
    ? true
    : false;
};
//split the input, then reverse it, then join it again, then make sure its all lowercase. 
//use ternery to see if its the same as input at lowercase