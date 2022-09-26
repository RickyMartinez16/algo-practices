function count(string) {
  let obj = {};
  //   const str2 = str.toLowerCase().replace(/[^A-Za-z]/g, '')
  for (let char of string) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}


