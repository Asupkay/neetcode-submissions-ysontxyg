class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let cLow = prices[0];
        for (let i = 1; i < prices.length; i++) {
            const cPrice = prices[i];
            if (cPrice - cLow > maxProfit) {
                maxProfit = cPrice - cLow;
            }
            cLow = Math.min(cLow, cPrice);
        }
        return maxProfit;
    }
}
