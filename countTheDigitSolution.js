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
    let count = '';
    const re = RegExp(d, 'g');
    for (let i = 0; i <= n; i++){
      count += i**2;
    }
    return count.match(re).length;  
  }