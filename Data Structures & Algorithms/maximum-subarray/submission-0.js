class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = null;
        let count = 0;
        for (const num of nums) {
            count += num;
            max = max !== null ? Math.max(max, count) : count;
            if (count < 0) {
                count = 0;
            }
        }
        return max;
    }
}
