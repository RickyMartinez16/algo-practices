// You own a Goal Parser that can interpret a string command. 
//The command consists of an alphabet of "G", "()" and/or "(al)" in some order. 
//The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". 
//The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

 

// Example 1:

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".
// Example 2:

// Input: command = "G()()()()(al)"
// Output: "Gooooal"
// Example 3:

// Input: command = "(al)G(al)()()G"
// Output: "alGalooG"



//failing//

var interpret = function(command) {
    //replace with o
    command = command.replace(/\(\)/g, "o");
    //replace with al
    command = command.replace(/(al)/g, "al");

    return command;
};



//chatgpt working------------- but bad time//


var interpret = function(command) {
    //string result
    let result = "";

    //looop thru input string
    for (let i = 0; i < command.length; i++) {
        //check each letter. if its a G add it to result string
        if (command[i] === "G") {
            result += "G";
            //if its a ( followed by a ) add an o to the rsult string
        } else if (command[i] === "(" && command[i + 1] === ")") {
            result += "o";
            i++; // skip next character
        } else if (command[i] === "(" && command[i + 1] === "a") {
            result += "al";
            i += 3; // skip next two characters and the closing parenthesis
        }
    }
    return result;
};

