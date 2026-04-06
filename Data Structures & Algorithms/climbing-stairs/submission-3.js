class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let p1 = 0;
        let p2 = 1;
        if (n === 0) {
            return p1;
        }
        for (let i = 1; i <= n; i++) {
            const swap = p1 + p2;
            p1 = p2;
            p2 = swap;
        }
        return p2;
    }
}
