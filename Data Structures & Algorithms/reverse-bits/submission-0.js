class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {

        let newNum = 0;
        for (let i = 0; i < 32; i++) {
            const lastBit = n & 1;
            newNum = (newNum << 1);
            newNum = newNum | lastBit;
            n = n >> 1;
        }

        return newNum >>> 0;
    }
}
