function deleteNth(arr,x){
    var obj = {}        //make an object
    return arr.filter(function(number){     //filter thru the input array. take each number. if it exists return obj[number] plus 1. if not make it 1
      obj[number] = obj[number] ? obj[number] + 1 : 1
      return obj[number] <= x       //return obj number only if its less than or equal to x in the filter
    })
  }

  //need to work on this