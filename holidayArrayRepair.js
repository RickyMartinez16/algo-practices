// The Problem
// A colleague has been working on a program that returns the number of days of holiday
//that people in your coding company can take in the remainder of the year.

// The colleague’s program outputs the number of holidays each employee has left as
//an integer within an array. However, the program is not working properly.
//Alongside the element that specifies the number of holidays are several other useless elements.
//These other elements are of a variety of data types and none are integers.

// Your colleague boasts that he has more days of holiday left than you.

// Your Task
// Array1 contains one integer that specifies the number of days of holiday that your colleague has left.
//Array2 contains one integer with the number of days of holiday that you have left.
//Each of the two arrays will never contain more than a single integer.

// If your colleague is telling the truth, the function should return the string "Right".
//If your colleague is wrong, the function should return the string "Wrong".
//If you both have the same number of days of holiday, the function should return the string "same".
//If your colleague's program is beyond repair and does not produce an integer in either arrays,
//the function should return a string "Not possible".

function holidayCount(a1, a2) {
    //make a map to filter just the numbers greater than 0
  let map1 = a1.filter((element) => element > 0);
    //make a map to filter just the numbers greater than 0
  let map2 = a2.filter((element) => element > 0);

  //find the highest in each map
  let highest1 = 0;
  for (let i = 0; i < map1.length; i++) {
    if (map1[i] > highest1) {
      highest1 = map1[i];
    }
  }

  //can do TWO loops

  //find the highest in each map
  let highest2 = 0;
  for (let i = 0; i < map2.length; i++) {
    if (map1[i] > highest2) {
      highest2 = map2[i];
    }
  }

  //if neither exist return not poss
  if (!highest1 && !highest2) return "Not possible";

  //check which is higher and return proper response
  if (highest1 > highest2) {
    return "Right";
  } else if (highest2 > highest1) {
    return "Wrong";
  } else {
    return "Same";
  }
}
