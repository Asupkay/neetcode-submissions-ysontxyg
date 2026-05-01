class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const state = {};
        
        function rec(n) {
            if (n === 0) {
                return 1
            }
            if (n === 1) {
                return 1;
            }
            if (state[n]) {
                return state[n];
            }
            return rec(n - 1) + rec(n - 2);
        }
        return rec(n)
    }
}
