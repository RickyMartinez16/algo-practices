var isAnagram = function (test, original) {
  let newString = test.toLowerCase().split("").sort().join("").toLowerCase();
  let otherNewString = original.toLowerCase().split("").sort().join("");

  if (newString === otherNewString) {
    return true;
  } else {
    return false;
  }
};
