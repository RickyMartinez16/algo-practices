function partlist(arr) {
    var newArray;   //make a new array var
    var returnArray=[];     //make a return array empty array var
    for( var i=1; i<arr.length; i++){       //loop thru the input array
      newArray = [];
      newArray.push(arr.slice(0,i).join(" "));  //push each item into the new array
      newArray.push(arr.slice(i).join(" "));
      returnArray.push(newArray);   //push the new array into the return array
    }
    
    return returnArray;
}