
/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    let minSum = 0;
    let maxSum = 0;
    
    let sortedArray = arr.sort(function(a, b){return a - b});
    
    for(let i = 0; i < sortedArray.length - 1; i++){
        minSum += sortedArray[i]
    }
    
    for(let i = 1; i < sortedArray.length; i++){
        maxSum += sortedArray[i]
    }
    console.log(minSum, maxSum);
}


