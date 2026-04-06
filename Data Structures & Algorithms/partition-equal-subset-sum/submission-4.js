class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let total = 0;
        for (const num of nums) {
            total += num;
        }

        if(total % 2 !== 0) {
            return false;
        }

        const memo = Array.from({length: nums.length}, () => new Array(total/2 + 1));
        
        function dfs(i, remaining) {
            if (i >= nums.length) {
                return false;
            }
            if (memo[i][remaining] !== undefined) {
                return memo[i][remaining];
            }
            if (remaining === 0) {
                return true;
            }
            if (remaining < 0) {
                return false;
            }


            const result = dfs(i + 1, remaining - nums[i]) || dfs(i + 1, remaining)
            memo[i][remaining] = result;
            return result;
        }

        return dfs(0, total/2)
    }
}
