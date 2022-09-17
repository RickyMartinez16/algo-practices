function DNAStrand(dna){
    let newDNA = [];
    for(let i = 0; i < dna.length; i++){
      if(dna[i] === "A"){
        newDNA.push("T")
      } else if(dna[i] === "T"){
        newDNA.push("A")
      } else if(dna[i] === "G"){
        newDNA.push("C")
      } else if(dna[i] === "C"){
        newDNA.push("G")
      }
    }
    return newDNA.join("")
  }