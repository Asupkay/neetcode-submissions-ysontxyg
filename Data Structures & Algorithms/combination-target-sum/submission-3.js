class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        function dfs(i, curr, sum) {
            if (i >= nums.length || sum > target) {
                return;
            }
            if (sum === target) {
                res.push([...curr]);
                return;
            }

            curr.push(nums[i]);
            dfs(i, curr, sum + nums[i]);
            curr.pop();
            dfs(i + 1, curr, sum)
        }
        dfs(0, [], 0)
        return res;
    }
}
