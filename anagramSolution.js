var isAnagram = function (test, original) {
  let newString = test.toLowerCase().split("").sort().join("").toLowerCase();       //sort the test string
  let otherNewString = original.toLowerCase().split("").sort().join("");        //sort the og string

  if (newString === otherNewString) {       //compare the strings
    return true;
  } else {
    return false;
  }
};
