class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let coinAmount = 0;
        let amountTracker = amount;
        coins = coins.sort((a, b) => a - b)
        for (let i = coins.length - 1; i >= 0; i--) {
            const coinDenom = coins[i];
            coinAmount += Math.floor(amountTracker/coinDenom);
            amountTracker = amountTracker % coinDenom;
        }
        if (amountTracker > 0) {
            return -1;
        }
        return coinAmount;
    }
}
