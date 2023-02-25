let input = [1,2,3,4,2,3,2,4,2,1,2,3,4,5,6,4,6,5,3,5,7,8,5,4,3,2,3,4,5,6,7,5,4,3,4,5,6,7,8,9,8,6,5,6,7,8,3,5,6,7,8,0,1]

function occuranceNums(array){

    //create a map
    let map = {}

    //loop thru input array
    for(let i = 0; i < array.length; i++){
        //if key exists in the map
        if(map[array[i]]){
            //add one to its value
            map[array[i]]++
        } else {
            //if it doesnt exist already then make it start at 1
            map[array[i]] = 1
        }
    }
    return map
}

console.log(occuranceNums(input))