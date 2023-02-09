// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]



//not working---------------------------------------

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