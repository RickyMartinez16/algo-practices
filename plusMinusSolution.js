

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */


// //helper function
// function percentage(partialValue, totalValue) {
//    return (partialValue) / totalValue;
// } 

function plusMinus(arr) {
    // Write your code here
    const arrayLength = arr.length;
    let negativeArray = [];
    let positiveArray = [];
    let zeroArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            negativeArray.push(arr[i]);
        } else if ( arr[i] > 0 ){
            positiveArray.push(arr[i])
        } else {
            zeroArray.push(arr[i]);
        }
    }
    console.log((positiveArray.length / arrayLength).toFixed(6));
    console.log((negativeArray.length / arrayLength).toFixed(6));
    console.log((zeroArray.length / arrayLength).toFixed(6))
}

