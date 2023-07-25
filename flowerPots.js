// You have a long flowerbed in which some of the plots are planted, and some are not. 
//However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 
// 1 means not empty, and an integer n, return true if n new flowers can be planted in the
// flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false


var canPlaceFlowers = function(flowerbed, n) {
    //edge cases

    //if n is 0 return true
    if (n === 0) return true;

    //if n is 1 and the first two spots are empty returen true
    if (n === 1 && flowerbed[0] === 0 && flowerbed[1] === 0) return true;

    //keep track of how many plants potted
    let count = n;

    //loop thru the flower bed
    for (let i = 0; i < flowerbed.length; i++) {
        //if the flowerbed ith element is 0
        if (flowerbed[i] === 0) {
            //make a prev variable. the prev variable checks if i is 0 and assigns it to zero if not it assigns it to flowerbed - 1
            const prev = i === 0 ? 0 : flowerbed[i - 1];
            //make a next variable. the next var checks if i is the same as fllowerbed - 1 if it is make it 0 if not make it flowerbed + 1
            const next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];
            
            if (prev === 0 && next === 0) {
                count--;
                flowerbed[i] = 1;
                if (count === 0) {
                    return true;
                }
            }
        }
    }
    return false;
};