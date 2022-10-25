
var isAnagram = function(test, original) {
    let newString = test.toLowerCase().split("").sort().join("").toLowerCase()
    let otherNewString = original.toLowerCase().split("").sort().join("")
    console.log(newString)
    console.log(otherNewString)
    if(newString === otherNewString){
      return true
    } else {
      return false
    }
  };