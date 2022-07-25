

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
    const arrayLength = arr.length;   //var the length of the array
    let negativeArray = [];         //var negative array to empty array
    let positiveArray = [];         //var pos array
    let zeroArray = [];         //var zero array 
    for(let i = 0; i < arr.length; i++){      //loop thru input array
        if(arr[i] < 0){        //check each index. if less than zero push into negative array
            negativeArray.push(arr[i]);
        } else if ( arr[i] > 0 ){       //if [i] more than zero push into positive array 
            positiveArray.push(arr[i])
        } else {
            zeroArray.push(arr[i]);    // else it equals zero push into zero array
        }
    }
    console.log((positiveArray.length / arrayLength).toFixed(6));    //print pos array length divived by input array length. to fixed decimal 6 places
    console.log((negativeArray.length / arrayLength).toFixed(6));    //print neg array length divived by input array length. to fixed decimal 6 places
    console.log((zeroArray.length / arrayLength).toFixed(6))        //print zero array length divived by input array length. to fixed decimal 6 places
}

