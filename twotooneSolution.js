function longest(s1, s2) {
  let uniqueLetters = [...new Set(s1), ...new Set(s2)];     //make an array of unique letters from each string via Sets
  let finalArray = [...new Set(uniqueLetters)].sort();      //make final array of unique letters and sort them
  return finalArray.join("");       // join the final array without a space and return contents
}  


//----best practice-----//

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

//spred a new set inato an array. the set will take only the unique letters. then sort. then join

