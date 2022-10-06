function doubleChar(str) {
  let final = [];
  for (let i = 0; i < str.length; i++) {
    final.push(str[i]);
    final.push(str[i]);
  }
  return final.join("");
}
