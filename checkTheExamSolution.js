function checkExam(array1, array2) {
    let count = 0;  //make count var
     for(let i = 0; i < array1.length; i++){    //loop thru array1
       if(array2[i] === ""){    //if array2 = ""
         count += 0     //dont change count
       } else if(array1[i] === array2[i]){  //if two sports are the same add 4 to count
         count +=4
       } else {
         count -=1  //if theyre not the same minus one from count
       }
     }
     return count >= 0 ? count : 0  //if count is above or eqaul to zero return the count if not return 0
   }