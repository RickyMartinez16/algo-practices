const input = "all day i dream about sports"

function occurrences(string){
    let map = {}

    // let split = array.split("")

    for(let i = 0; i < string.length; i++){
        if(map[string[i]]){
            map[string]++
        } else {
            map[string] = 1
        }
    }
    return map
}

console.log(occurrences(input))