

function countingSort(arr) {
   let intArray = new Array(100).fill(0);     //create a new array and fill it with one hundred 0s

   for(let i = 0; i < arr.length; i++){       //for loop thru input array
       let x = arr[i];                         //decalre x to equal each index
       intArray[x] += 1;                      // adds one to the [x] index
   }
  return intArray;   //return frequency array
}

//input: arr = [1, 1, 1, 3, 2, 1]
//output: intArray = [0, 4, 1, 1]    