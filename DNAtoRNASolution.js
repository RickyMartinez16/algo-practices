function DNAtoRNA(dna) {
  let regex = /([T])/g;     //make a regex to find all the captail Ts
  return dna.replace(regex, "U");    //replace all the regex with the Us
}
