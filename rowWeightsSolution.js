//-----not working----//

function rowWeights(array){
    let a1 = []
    let a2 = []
    let final = []
    if(array.length === 1){
      a2.push(0)
        for(let i = 0; i < array.length; i++){
        a1.push(array[i]) 
      }
        const sum1 = a1.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
            const sum2 = a2.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
      final.push(sum1, sum2)
  }
  
    console.log(a1, a2)
    return final
  }



  //----working------//

  function rowWeights(array){
    let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);   //filter the array by indexs that are divisible by 2 then reduce them
    let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);   //filter the array by indexs that are not divisible by 2 then reduce them
    return [t1, t2] //return final 
  }

  function rowWeights(array){
    var arr = [0, 0];       //set an array with two values
    for (var i = 0; i < array.length; i++) {        //loop thru array
      i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];     //if index is divisible by 2 new arr first value equals plus array[i] if its not divisble by two the second value equals plus array[i]
    }
    return arr;     //return final
  }