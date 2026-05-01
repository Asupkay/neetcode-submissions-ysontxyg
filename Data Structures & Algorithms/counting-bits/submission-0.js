class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const numBits = [0];
        for (let i = 1; i <= n; i++) {
            numBits[i] = numBits[i >> 1] + (i & 1)
        }
        return numBits;
    }
}
