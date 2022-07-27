function pangram(string){
    let lowerCaseString = string.toLowerCase();     //lowercase in input string
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split(' ');     //make an alphabet array using .split(" ")

    for(let i = 0; i < alphabet.length; i++){           //loop thru the aplhabet array 
        if(lowerCaseString.indexOf(alphabet[i]) < 0){       //if a certain char is not found in lowerCaseString (the indexOf method returns -1), 
                                                            //the loop will end and the function will return false or "not pangram".
            return "not pangram"  
        }
    }
    return "pangram"        //if loop runs to complete that means its a pangram
}

//input: "The quick brown fox jumps over the lazy dog." 
//input: "This is not a pangram." 

//output: true
//output:  false