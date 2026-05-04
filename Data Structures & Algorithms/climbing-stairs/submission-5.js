class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = {}
        function dp(cost) {
            if (memo[cost]) {
                return memo[cost]
            }
            if (cost === 0) {
                return 1;
            }
            if (cost === 1) {
                return 1;
            }
            if (cost === 2) {
                return 2;
            }


            const r = dp(cost - 1) + dp(cost - 2)
            memo[cost] = r;
            return r;
        }

        return dp(n);
    }
}
