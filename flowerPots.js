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

    if (n === 1 && flowerbed[0] === 0 && flowerbed[1] === 0) return true;

    let count = n;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            const prev = i === 0 ? 0 : flowerbed[i - 1];
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