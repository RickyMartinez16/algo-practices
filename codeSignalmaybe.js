function codeSignal (array){
    for(let i = 0; i < array.length; i++){
        let j = i + 1
        if(array[i] === array[j]){
            let range = array.slice(array.indexOf(array[i]), array.lastIndexOf(array[i] + 1))
            console.log("indexOf: " + array.indexOf(array[i]))
            console.log("last indexOf: " + array.lastIndexOf(array[i] + 1))
            console.log("range: " + range)
            let sum = range.reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                0
              );
            console.log("sum: " + sum)
            array.splice(array[i], range.length, sum)
        }
    }
    return array
}



//loop thru array
//if i equals j you have a range
//find the complete range by slicing a copy of it from start to end
//reduce the range to get one value
//swtich out the range with the sumed value
//return the final array

console.log(codeSignal([1, 1, 1, 2, 3, 4, 5, 5, 5, 6]))