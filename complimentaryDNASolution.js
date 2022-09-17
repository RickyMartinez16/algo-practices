function DNAStrand(dna) {
  let newDNA = [];  //make new dna array
  for (let i = 0; i < dna.length; i++) {    //loop thru the input dna string
    if (dna[i] === "A") {       //check what each [i] of the dna string is and push the opposite into new array
      newDNA.push("T");
    } else if (dna[i] === "T") {
      newDNA.push("A");
    } else if (dna[i] === "G") {
      newDNA.push("C");
    } else if (dna[i] === "C") {
      newDNA.push("G");
    }
  }
  return newDNA.join("");   //return new array joined so its a string
}


//----- best practice ----- //

function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }