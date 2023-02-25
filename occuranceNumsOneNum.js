let input = 123456789785373173748


function oneNum(num){
    //make a map
    let map = {}
    //convert input number into a string
    let stringInput = String(input)
    //split the string
    let splitInput = stringInput.split("")
    //map over the split array to make a new array of individual numbers
    let mappedIput = splitInput.map((element) => Number(element))

    //loop over the mapped inoput of indiviual numbers
    for(let i = 0; i < mappedIput.length; i++){
        //if it exsists in the map
        if(map[mappedIput[i]]){
            //add one to the value
            map[mappedIput[i]]++
        } else {
            //if not create the key and make the value 1
            map[mappedIput[i]] = 1
        }
    }
    return map

    console.log(mappedIput)
}

console.log(oneNum(input))