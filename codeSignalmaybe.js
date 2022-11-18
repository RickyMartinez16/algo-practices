function codeSignal (array){
    for(let i = 0; i < array.length; i++){
        let j = i + 1
        if(array[i] === array[j]){
            let range = array.slice(array.indexOf(array[i]), array.lastIndexOf(array[i]))
            let sum = range.reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                0
              );
            array.splice()
        }
    }
}

codeSignal([1, 1, 1, 2, 3, 4, 5, 5, 5, 6])