let input = "aisjfjfewieuhficusdh siduhhcisiudhu loren ipsoum and aoref fr the aalele because it was only his words"

function occuranceString(string){
    let map = {}
    let stringSplit = input.split("")

    for(let i = 0; i < stringSplit.length; i++){
        if(map[stringSplit[i]]){
            map[stringSplit[i]]++
        } else {
            map[stringSplit[i]] = 1
        }
    }
    return map
}

console.log(occuranceString(input))