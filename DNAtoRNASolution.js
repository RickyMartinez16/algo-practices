function DNAtoRNA(dna) {
  let regex = /([T])/g;
  return dna.replace(regex, "U");
}
