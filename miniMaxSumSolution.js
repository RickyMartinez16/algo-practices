
/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    let minSum = 0;  //set min sum to 0
    let maxSum = 0;  //set max sum to 0
    
    let sortedArray = arr.sort(function(a, b){return a - b});  //sort the input array
    
    for(let i = 0; i < sortedArray.length - 1; i++){    //for loop thru sorted array thru total length minus one
        minSum += sortedArray[i]             //add each [i] to minSum
    }
    
    for(let i = 1; i < sortedArray.length; i++){        //loop thru sorted array starting at index [1]
        maxSum += sortedArray[i]            // add each [i] to the max sum
    }
    console.log(minSum, maxSum);  //print each min and max sum
}


