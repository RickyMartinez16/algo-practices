





const orderedCount = function (text) {
    //loop thru the input text
    //take count of each letter. 
    //push letter and count into an array
    //push array into a final array
    
    let letters = text.split("")
    
    let finalArray = [];
    
    let elementArray = []
    
    let lettersSet = new Set(text)
    
    let lettersSetArray = [...lettersSet]
    
    let count = 0
    
    for(let i = 0; i < lettersSetArray.length; i++){
      let eleArray = new Array(lettersSetArray[i])
      
      for(let j = 0; j < letters.length; j++){
  
        if(letters[j] === eleArray[0]){
          count ++
        }
        eleArray.push(count)
      }
    }
    finalArray.push(eleArray)
  }