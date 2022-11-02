"use strict";

function flattenAndSort(array) {
  let finalArray = array.flat();
  return finalArray.sort(function (a, b) {
    return a - b;
  });
}
