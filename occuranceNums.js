let input = [1,2,3,4,2,3,2,4,2,1,2,3,4,5,6,4,6,5,3,5,7,8,5,4,3,2,3,4,5,6,7,5,4,3,4,5,6,7,8,9,8,6,5,6,7,8,3,5,6,7,8,0,1]

function occuranceNums(array){
    let map = {}

    for(let i = 0; i < array.length; i++){
        if(map[array[i]]){
            map[array[i]]++
        } else {
            map[array[i]] = 1
        }
    }
    return map
}

console.log(occuranceNums(input))