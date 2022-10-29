//not working//
function nbDig(n, d) {
    let array = []
    for(let i = 0; i <= n; i++){
      let square = i * 2
      array.push(square)
    }
   
   let arrayString = array.join("")
   
   let count = 0
   for(let i = 0; i < arrayString.length; i++){
     if(arrayString[i] === d){
       count++
     }
   }
   return count
 }


 //--------answer--------//

 function nbDig(n, d) {
    let count = '';     //set count as a string
    const re = RegExp(d, 'g');      //create regex to filter the d youre looking for
    for (let i = 0; i <= n; i++){       //loop thru thr input, squaring each number and adding it to the count string
      count += i**2;
    }
    return count.match(re).length;  //match the regex and get the length of the match
  }