function solution(str, ending) {
  //slice the end of the sting the length of the ending string
  //then check if theyre the same
  if (!ending) {
    return true;
  }
  let letters = str.split("");
  let end = letters.slice(-ending.length).join("");
  console.log(end);
  if (end == ending) {
    return true;
  } else {
    return false;
  }
}
