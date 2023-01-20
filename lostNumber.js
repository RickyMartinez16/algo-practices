// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).


//NOT WORKING------------------------

function findDeletedNumber(arr, mixArr) {
    if(!arr) return 0
    let both = [...arr, ...mixArr]
    console.log(both)
    for(let i = 1; i < both.length; i++){
      if(both.indexOf(i) ){
        return both[i]
      }
    }
    return 0
  }

  //WORKING---------------------------

  function findDeletedNumber(arr, mixArr) {
      //add the array together
    let arrSum = arr.reduce((a,b) => a + b, 0)
        //add the mixed array togeher
    let mixArrSum = mixArr.reduce((a,b) => a + b, 0)
    //if theres a difference it will show if not it will be zero
    return arrSum - mixArrSum
  }
  