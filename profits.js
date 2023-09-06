// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104


var maxProfit = function(prices) {
    //if the length of the prices input array is eual or less than 1
    if (prices.length <= 1) {
        //rerturn 0
        return 0;
    }
    
    //set a minprice var and set it to the first element of the prices array
    let minPrice = prices[0];
    //keep track of the max profit and start it at 0
    let maxProfit = 0;
    
    //loop thru the prices array and start with element at index 1 
    for (let i = 1; i < prices.length; i++) {
        //check if the ith element is less than the min price. if so
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }
    
    return maxProfit;
};