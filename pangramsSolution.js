function pangram(string){
    let lowerCaseString = string.toLowerCase();     //lowercase in input string
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');     //make an alphabet array using .split("")

    for(let i = 0; i < alphabet.length; i++){           //loop thru the aplhabet array 
        if(lowerCaseString.indexOf(alphabet[i]) < 0){       //if a certain char is not found in lowerCaseString (the indexOf method returns -1), 
                                                            //the loop will end and the function will return false or "not pangram".
            return "not pangram"  
        }
    }
    return "pangram"        //if loop runs to complete that means its a pangram
}

function pangrams(s) {
    let lowerCaseString = s.toLowerCase()
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split(' ')

    for(let i = 0; i < alphabet.length; i++){
       if(lowerCaseString.indexOf(alphabet[i]) < 0){
        return "not pangram"
        } 
    }
    return "pangram"
}

//input: "The quick brown fox jumps over the lazy dog." 
//input: "This is not a pangram." 

//output: true
//output:  false


//https://javascript.plainenglish.io/javascript-algorithm-detect-pangram-9d57ca713d0d#:~:text=A%20pangram%20is%20a%20sentence,the%20alphabet%20at%20least%20once.&text=The%20first%20thing%20we%20are,let%20strArr%20%3D%20string.