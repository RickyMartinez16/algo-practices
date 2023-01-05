function spEng(sentence){
    let regex = /(english)/g 
    let lowerSen = sentence.toLowerCase();
    
    return regex.test(lowerSen)
  }