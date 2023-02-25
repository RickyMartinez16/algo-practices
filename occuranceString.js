let input = "aisjfjfewieuhficusdh siduhhcisiudhu loren ipsoum and aoref fr the aalele because it was only his words"

function occuranceString(string){
    //create a map
    let map = {}
    //split the input string for idniciaual letters
    let stringSplit = input.split("")

    //loop over the input string array you just split
    for(let i = 0; i < stringSplit.length; i++){
        //if key exsits in the map
        if(map[stringSplit[i]]){
            //add one to the value
            map[stringSplit[i]]++
        } else {
            //if no key exists create it and init to 1
            map[stringSplit[i]] = 1
        }
    }
    return map
}

console.log(occuranceString(input))