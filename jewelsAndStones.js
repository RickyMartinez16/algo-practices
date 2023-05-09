// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. 
//Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0



var numJewelsInStones = function(jewels, stones) {
    //split the jewels string into an array
    let jewelsArray = jewels.split("");

    //keep track of the count 
    let count = 0;

    //loop thru the jewels array and for each element 
    jewelsArray.forEach((element) => {
        //make a regex of the elemment
        const regex = new RegExp(element, 'g');

        //make a matches array by checking how many times the regex returns a match of the regex from the stonees string
        const matches = stones.match(regex);

        //count equals plus eqauls if matches is true its matches.length or its 0 if false
        count += matches ? matches.length : 0;
    })

    return count
};
