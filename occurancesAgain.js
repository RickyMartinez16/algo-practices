const input = "all day i dream about sports"

function occurrences(string){
    //make a map
    let map = {}

    //loop thru the string input
    for(let i = 0; i < string.length; i++){
        //if the key exists in the map
        if(map[string[i]]){
            //add one to the value
            map[string[i]]++
        } else {
            //if it doesnt already exist then make it start at 1
            map[string[i]] = 1
        }
    }
    //return the map
    return map
}

console.log(occurrences(input))