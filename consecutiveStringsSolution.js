//------ 3 of 6 passing------//

function longestConsec(strarr, k) {
  let length = 0;
  let concat = "";
  let concatArray = [];
  let finalConcat = "";

  for (let i = 0; i < strarr.length; i++) {
    concat = strarr[i] + strarr[k];
    concatArray.push(concat);
  }

  for (let j = 0; j < concatArray.length; j++) {
    if (concatArray[j].length > length) {
      length = concatArray[j].length;
      finalConcat = concatArray[j];
    }
  }
  return finalConcat;
}

//-------working-----//

function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k <= 0) {
    return "";
  } else {
    var list = [];
    for (var i = 0; i < strarr.length - k + 1; i++) {
      list[i] = strarr.slice(i, k + i).join("");
    }

    var longest = list.reduce(function (a, b) {
      return a.length >= b.length ? a : b;
    });
    return longest;
  }
}

//-------best prac-------//

function longestConsec(strarr, k) {
  var longest = "";
  for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
    var tempArray = strarr.slice(i, i + k);
    var tempStr = tempArray.join("");
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}
