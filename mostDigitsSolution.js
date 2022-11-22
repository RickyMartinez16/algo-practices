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
    let num = '0';      //make num a string var
    for(let i=0; i<array.length; i++) { //loop thru input array
      let string = array[i].toString();     //make a string var which is each number in the input array converted to string
      if(string.length > num.length) {  //if string .length is larger than num.length
        num = string;   //then num is now the string
      }
    }
    return parseInt(num);       //parse the string to return a num
  }