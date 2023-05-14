// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, 
//and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

 

// Example 1:

// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
// Example 2:

// Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
// Output: 2
// Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.


var countMatches = function(items, ruleKey, ruleValue) {
    //keep track of the count
    let count = 0

    //loop thru input array
   for(let i = 0; i < items.length; i++){
       //check if the rule key is each type. and if italso matches that space in the array
           if(ruleKey === "type" && items[i][0] === ruleValue){
               count++
           } else if (ruleKey === "color" && items[i][1] === ruleValue){
               count++
           } else if(ruleKey === "name" && items[i][2] === ruleValue){
               count++
           }   
   } 
   return count
};