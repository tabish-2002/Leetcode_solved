/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0;           // buy day
    let right = 1;          // sell day
    let maxProfit = 0;

    while (right < prices.length) {
        if (prices[right] > prices[left]) {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
        } else {
            left = right; // new minimum price to buy
        }
        right++;
    }

    return maxProfit;
    
};