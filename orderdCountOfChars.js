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


//--------------------------------------------------------------------------------------------------

var orderedCount = function (text) {

    //make a final array element
  var arr=[];

  //loop thru the input text
  for (var i=0; i<text.length; ++i){

    //make a varitable for the count
     var k=0;

     //loop thru final array element
     for (var j=0; j<arr.length; ++j)

        //if finalArray[j] at first spot [0] equals the text[i] its on 
        if (arr[j][0]==text[i])
            //add to count
            k++;
        
        //if count is zero after check
        if (k==0){
            //loop thru text starting at input i
        for (var j=i; j<text.length; ++j)
            //if text[j] equals text [i]
          if (text[j]==text[i])
            //add one to count
             k++;
             //push an array of text[i] with count to final array
          arr.push([text[i],k]);
       }
  }
  //return final array
  return arr;

}



//best prac-------------------

//make a new set with the str and spread that into an array
//map over new made array
//look at each character
//return character and str.split by character length - 1
const orderedCount = str => [...new Set([...str])].map(char => [char, str.split(char).length - 1])