"use strict";

function flattenAndSort(array) {
  let finalArray = array.flat();        //flatten the array of arrays into just one array
  return finalArray.sort(function (a, b) {      //sort the finalarray and return
    return a - b;
  });
}
