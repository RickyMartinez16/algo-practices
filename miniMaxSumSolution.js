'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

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

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
