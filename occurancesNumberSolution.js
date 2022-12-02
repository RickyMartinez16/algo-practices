function deleteNth(arr,x){
    var obj = {}
    return arr.filter(function(number){
      obj[number] = obj[number] ? obj[number] + 1 : 1
      return obj[number] <= x
    })
  }