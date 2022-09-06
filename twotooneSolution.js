function longest(s1, s2) {
  let uniqueLetters = [...new Set(s1), ...new Set(s2)];
  let finalArray = [...new Set(uniqueLetters)].sort();
  return finalArray.join("");
}


//----best practice-----//

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')