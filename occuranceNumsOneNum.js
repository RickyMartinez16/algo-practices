let input = 123456789785373173748


function oneNum(num){
    let map = {}
    let stringInput = String(input)
    let splitInput = stringInput.split("")
    let mappedIput = splitInput.map((element) => Number(element))
    return mappedIput
}

console.log(oneNum(input))