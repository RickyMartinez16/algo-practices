//not working//

function findLongest(array){
    let length = 0;
    let longNum = null
    for(let i = 0; i < array.length; i++){
      if(array[i].length > length){
        length = array[i].length;
        longNum = array[i]
      }
    }
    return longNum
  }


  //----working-----//

  function findLongest(array){
    let num = '0';
    for(let i=0; i<array.length; i++) {
      let string = array[i].toString();
      if(string.length > num.length) {
        num = string;
      }
    }
    return parseInt(num);
  }